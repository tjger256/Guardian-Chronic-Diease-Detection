from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

import requests
import json

import pandas as pd 
from backend.modeling import predict_probabilities

#init()
# MLInterface import model

# Create your views here.
# @api_view(['POST'])
# def testPost(request):
#     print("hello")
#     print(request.data)
#     #prediction = MachineLearningInterface(gender, height, general)
#     return Response("hello world")


# #Test data most likely going to change
# person_health_stats = {
#     "name": "Alex Smith",
#     "age": 30,
#     "height_cm": 175,
#     "weight_kg": 70,
#     "blood_pressure": {"systolic_mmHg": 120, "diastolic_mmHg": 80},
#     "heart_rate_bpm": 72,
#     "cholesterol_ldl_mgdl": 100,
#     "cholesterol_hdl_mgdl": 40,
#     "fasting_blood_glucose_mgdl": 90
# }

# #The data format that the ml will accept 
# ml_data_format = pd.DataFrame([{     
#     'PhysicalActivities': 1,
#     'SmokerStatus': 0,
#     'AlcoholDrinkers': 1,
#     'RemovedTeeth': 0,
#     'DifficultyConcentrating': 0,
#     'LastCheckupTime': 1,
#     'BlindOrVisionDifficulty': 0,
#     'Sex': 0,
#     'DifficultyDressingBathing': 0,
#     'DifficultyErrands': 0,
#     'DeafOrHardOfHearing': 1,
#     'HadKidneyDisease': 0,
#     'HadArthritis': 1,
#     'PneumoVaxEver': 1,
#     'HadCOPD': 0,
#     'HadDiabetes': 1,
#     'DifficultyWalking': 2,
#     'ChestScan': 0,
#     'AgeCategory': 8,
#     'HadStroke': 1,
#     'HadAngina': 1,
#     'GeneralHealth': 2,
#     'PhysicalHealthDays': 4,
#     'MentalHealthDays': 2,
#     'SleepHours': 7,
#     'WeightInKilograms': 70.0,
#     'BMI': 22.0
# }])


# #ml_ouput = predict_probabilities(ml_data_format, log_reg, scaler=scaler)
# probability = (predict_probabilities(ml_data_format, log_reg, scaler=scaler)[0])*100

# # Crafting a prompt that utilizes the health stats
# prompt_content = f"""
# Based on the following health stats:
# - Age: {person_health_stats['age']} years
# - Height: {person_health_stats['height_cm']} cm
# - Weight: {person_health_stats['weight_kg']} kg
# - Systolic Blood Pressure: {person_health_stats['blood_pressure']['systolic_mmHg']} mmHg
# - Diastolic Blood Pressure: {person_health_stats['blood_pressure']['diastolic_mmHg']} mmHg
# - Heart Rate: {person_health_stats['heart_rate_bpm']} bpm
# - LDL Cholesterol: {person_health_stats['cholesterol_ldl_mgdl']} mg/dL
# - HDL Cholesterol: {person_health_stats['cholesterol_hdl_mgdl']} mg/dL
# - Fasting Blood Glucose: {person_health_stats['fasting_blood_glucose_mgdl']} mg/dL
# - Probalility of heart disease derived from trustable source: {probability}
# What is a recommended weekly workout plan? Your output should only be the plan, make it very detailed and warn the user of their probability of heart disease, give the probability in percent form
# Respond strictly int the following JSON format:
# - {json.dumps({"tasks" : "[tasks...]", "plan" : "string", "diagnosis" : "string" } )} 
# """

# # Convert the first row of the DataFrame to a dictionary
# health_stats = ml_data_format.iloc[0].to_dict()


# # Adjust the prompt content to include values from the DataFrame

""" put this back if you want in JSON format
Respond strictly int the following JSON format, make the plan and tasks detailed referencing the user's health info:
- {json.dumps({"tasks" : "[tasks...]", "plan" : "string", "diagnosis" : "string" } )} 
"""

# This converts chatGpt's output to a dictionary in json format: {json.dumps({"tasks" : "[tasks...]", "plan" : "string", "diagnosis" : "string" } )}


# print(probability)

#percentage = str(predict_probabilities(ml_data_format, log_reg, scaler=scaler)[0])
#prompt is going to be combo of output from ml model and added context" 
@api_view(['POST']) #only allow POST
def send_prompt_to_gpt(request): #need to add the key aswell
    health_stats = json.loads(request.body)["data"]["data"]

    ml_data_format = pd.DataFrame([health_stats])
    probability = (predict_probabilities(ml_data_format)[0])
    ml_prompt = f"""
    Generally for T/F or Y/N is 1/0
    Person's health data:
    - PhysicalActivities: {health_stats['PhysicalActivities'] } -- Is physically active? Y/N
    - SmokerStatus: {health_stats['SmokerStatus']} -- [Never Smoked, Former Smoker, Occasionally Smokes, Daily Smoker]
    - AlcoholDrinkers: {health_stats['AlcoholDrinkers']} -- drinks alcohol? Y/N
    - RemovedTeeth: {health_stats['RemovedTeeth']} -- Number of teeth removed
    - DifficultyConcentrating: {health_stats['DifficultyConcentrating']} -- Y/N
    - LastCheckupTime: {health_stats['LastCheckupTime']} -- 0 = Never, 1 = Last Week, 2 = Last Month, 3 = Last Year, 4 = Over 2 Years
    - BlindOrVisionDifficulty: {health_stats['BlindOrVisionDifficulty']} -- Y/N
    - Sex: {health_stats['Sex']} -- 1 is for Male 0 is for Female
    - DifficultyDressingBathing: {health_stats['DifficultyDressingBathing']} -- Y/N
    - DifficultyErrands: {health_stats['DifficultyErrands']} -- Y/N
    - DeafOrHardOfHearing: {health_stats['DeafOrHardOfHearing']} -- 1 is Yes 0 is No
    - HadKidneyDisease: {health_stats['HadKidneyDisease']} -- Y/N
    - HadArthritis: {health_stats['HadArthritis']} -- Y/N
    - PneumoVaxEver: {health_stats['PneumoVaxEver']} -- Y/N
    - HadCOPD: {health_stats['HadCOPD']} -- Y/N
    - HadDiabetes: {health_stats['HadDiabetes']} -- Y/N
    - DifficultyWalking: {health_stats['DifficultyWalking']} -- Y/N
    - ChestScan: {health_stats['ChestScan']} -- Has had chest scan Y/N
    - AgeCategory: {health_stats['AgeCategory']} -- [0-7, 8-14, 15-21, 22-28, 29-35, 36-42, 43-49, 50-56, 67-63+]
    - HadStroke: {health_stats['HadStroke']} -- Y/N
    - HadAngina: {health_stats['HadAngina']} -- Y/N
    - GeneralHealth: {health_stats['GeneralHealth']} -- [Poor, Fair, Good, Very Good, Excellent]
    - PhysicalHealthDays: {health_stats['PhysicalHealthDays']} -- Number of Days
    - MentalHealthDays: {health_stats['MentalHealthDays']} -- Number of Days
    - SleepHours: {health_stats['SleepHours']} -- Number of Hours
    - WeightInKilograms: {health_stats['WeightInKilograms']} -- Weight in kg
    - BMI: {health_stats['BMI']}
    - Probability of heart disease: {probability}
    Taking into account of the person's statistics, please generate at least two proper health plans. 
    Make it very detailed, and make the health plan and their corresponding task appropriate for their statistics.
    Also make the output sound as if you're talking to them.
    For "plan_tasks" we want to generate at least 4 tasks. 
    The value for the key "task" will be an action plan for the user. 
    The value for the key "workout plan" will be the daily workout plan of each day for the user.
    task_days is an array of days which the user should do the task. If it should be done everyday, then it should be an array with just the string "Everyday"
    Answer strictly in the following JSON format. Do not change the keys. Just return the JSON string.
    - {json.dumps({
    "risk_probability": "Probability for user to get heart disease (value from 0 to 1)",
    "assessment":"Basic assessment given the probability and person's health statistics. Should recommend to fix specific bad habits or health issues",
    "plans" : [ {
        "plan_summary": "summary of the plan based on the specific issues it is trying to address",
        "plan_title": "catchy title with an emoji that describes the plan. It should address specific issues",
        "plan_tasks": [
            {
            "task_name": "catchy title with an emoji that describes the task",
            "task_description": "detailed description of the task",
            "task_days": ["Mon| Tue | Wed | ... | Everyday","..."],
            "task_difficulty": "Number from 1 to 100"
            },
            "..."
        ]
    }, "..."
    ]
})} 
    """


    headers = {"Authorization": f"Bearer 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", "Content-Type": "application/json"}
    payload = { "response_format":{ "type": "json_object" }, "model": "gpt-3.5-turbo-0125", "max_tokens" : 4000, "messages": [{"role": "user", "content": ml_prompt}], "temperature": 0.7} #what is being sent to the api, make sure its in the right format
    API_URL = "https://api.openai.com/v1/chat/completions"                      #content is the prompt being sent to gpt, find a way to incorporate the users percentage from the ml model into the prompt, btw it has to be a string format, you're also making the string formatted.
    #print(json.dumps(payload)) this prints the dataset entered into gpt
    #return Response("Testing")
    #print(ml_ouput)
   
   #{json.dumps({"tasks" : "recommended tasks", "diet" : " recommended lesson plan", "heart_disease_prob" : "float" } )} 
   
    response = requests.post(API_URL, json = payload, headers=headers)
#prints the content into the terminal 
    if response.status_code == 200:
        #response_data = response.json()
        return Response(response.json()["choices"][0]["message"]["content"]) #prints the content into the terminal 
    else:
        return Response(f"Error: {response.status_code}, {response.text}")
    
     
#def MachineLearningInterface(gender, height, heneral health):

   # .
    #.
    #.
    #return prediction 




    #use this to get output from the frontend, go to inspect page, then to consle, then clicked the ">" symbol at the bottom
    '''
    fetch("http://127.0.0.1:8000/api/send_prompt_to_gpt",{
method:"POST",
}).then(response=>response.json()).then(data=>console.log(data)) 
'''

#use this to get output from front end but also to send data to backend, this example sends dictionary "test" to the backend, it will be loaded into request
'''
const data = {
    test: "hello world"
}

fetch("http://127.0.0.1:8000/api/send_prompt_to_gpt",{
method:"POST", 
    body: JSON.stringify(data) 
}).then(response=>response.json()).then(data=>console.log(data)) 
'''


'''
const data = {
    test: "hello world"
}

fetch("http://127.0.0.1:8000/api/send_prompt_to_gpt",{
method:"POST", 
    body: JSON.stringify(data) ###turns gpt's json dictionary output to a normal dictionary
}).then(response=>response.json()).then(data=>console.log(JSON.parse(data).diagnosis)) ###this returns the diagnosis key and its value in the dictionary output
'''