import numpy as np
import pandas as pd
import seaborn as sns
from matplotlib import pyplot as plt
from sklearn.impute import KNNImputer

def nulling (df_in, col_name):
    for i,row in enumerate(df_in[col_name]):
        if row == 0:
            df_in.at[i,col_name]=None
            
    df_out = df_in
    return df_out

def rounding (df_in, col_name,r):
    for i,row in enumerate(df_in[col_name]):
        df_in.at[i,col_name]=round(row,r)
    df_out = df_in
    return df_out

def impute_knn(df_in):
    imputer = KNNImputer(n_neighbors=3)
    imputed = imputer.fit_transform(df_in)
    df_imputed = pd.DataFrame(imputed, columns=df_in.columns)
    return df_imputed

def impute_knnn(df_in):
    data = df_in
    imputer = KNNImputer(n_neighbors=3)
    #class 0
    class0 = data[data['Outcome']==0]
    class0idx = class0.index
    #class 1
    class1=data[data['Outcome']==1]
    class1idx = class1.index

    imputedc0 = imputer.fit_transform(class0)
    imputedc1 = imputer.fit_transform(class1)
    df_imputed0 = pd.DataFrame(imputedc0,index=class0idx, columns=data.columns)
    df_imputed1 = pd.DataFrame(imputedc1,index=class1idx, columns=data.columns)

    df_imputed=pd.concat([df_imputed0,df_imputed1])
    df_imputed=df_imputed.sort_index()
    return df_imputed





