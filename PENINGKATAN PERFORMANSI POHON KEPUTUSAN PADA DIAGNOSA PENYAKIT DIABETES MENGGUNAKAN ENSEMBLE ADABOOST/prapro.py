import func
import numpy as np
from math import log2, e, log, exp
import importlib
importlib.reload(func)

def praproses(df,knn=1):
    tempn= ['Glucose','BloodPressure','SkinThickness','Insulin','BMI']
    tempr={
        'Glucose':0,
        'Pregnancies':0,
        'BloodPressure':0,
        'SkinThickness':0,
        'Insulin':0,
        'BMI':1
    }
    if knn == 1:
        for i in df.head():
            if i in tempn:
                df=func.nulling(df,i)
        df=func.impute_knnn(df)

    for i in df.head():
        if i in tempr:
            df=func.rounding(df,i,tempr[i])
    return df

def get_label_v(labels):
    n_labels = len(labels)
    if n_labels <= 1:
        return 0
    value,counts = np.unique(labels, return_counts=True)
    probs = counts / n_labels
    
    return value,counts,n_labels,probs

def entropy(probs):
    ent = 0.
    try:
        for i in probs:
            ent -= i * log2(i)
        return ent
    except:
        ent=0
        return ent

def ign_zero(x,y):
    try:
        return x/y
    except:
        return 0

def selecter(val,df,col):
    sk=len(df.loc[df[col]<=val])
    sl=len(df.loc[df[col]>val])
    sk0=len(df.loc[(df[col]<=val)&(df['Outcome']==0)].filter(col))
    sk1=len(df.loc[(df[col]<=val)&(df['Outcome']==1)].filter(col))
    sl0=len(df.loc[(df[col]>val)&(df['Outcome']==0)].filter(col))
    sl1=len(df.loc[(df[col]>val)&(df['Outcome']==1)].filter(col))
    pskt=[ign_zero(sk0,sk),ign_zero(sk1,sk)]
    pslt=[ign_zero(sl0,sl),ign_zero(sl1,sl)]
    
    return sk,sk0,sk1,sl,sl0,sl1,pskt,pslt

def get_max(df):
    minval =-1
    val=0
    for i in df:
        if i[1] > minval:
            minval=i[1]
            val=i[0]
    return minval,val
    
def diskritisasi(df,l_data,l_col):
    temp=[]
    value,counts,n_val,probs = get_label_v(df[l_col])
    for idx,i in enumerate(value):
        sk,_,_,sl,_,_,pskt,pslt = selecter(i,df,l_col)
        epskt=entropy(pskt)
        epslt=entropy(pslt)
        _,_,n_data,pdata= get_label_v(df[l_data])
        entt=entropy(pdata)
        informa= entt-(sk/n_data*epskt+sl/n_data*epslt)
        temp.append([i,informa])
    return get_max(temp)

def helper_disk(df,l_data):
    temp={}
    for i in df.head():
        if i != l_data:
            temp[i]=diskritisasi(df,l_data,i)
    return temp    

def tosplt(df,sp):
    zz=df
    for i in sp:
        aa= [sp[i][1] if x== True else sp[i][1]+1 for x in zz[i]<=sp[i][1] ]
        zz.drop(columns=[i])
        zz[i]=aa
    return zz

def runAll():

    data = func.pd.read_csv('diabetes.csv')
    data=praproses(data)
    splitter = helper_disk(data,'Outcome')
    print(splitter)
    zz=data.copy()    
    pp_disc=tosplt(zz,splitter)

    return pp_disc

def runNoknn():
    data = func.pd.read_csv('diabetes.csv')
    data=praproses(data,0)
    splitter = helper_disk(data,'Outcome')
    zz=data.copy()    
    pp_disc=tosplt(zz,splitter)

    return pp_disc