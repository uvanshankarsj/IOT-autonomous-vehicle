import boto3
import sys

arr=[]
location=sys.argv[1]
region = 'us-east-1'
dynamodb = boto3.resource('dynamodb', region_name=region)
table=dynamodb.Table("robotestrun")

table_name='route_table1'
orders_table = dynamodb.Table(table_name)

response = table.scan(Limit=1)
data1=response["Items"]

print(data1[0]['blockpoint'])
response = orders_table.query(
    KeyConditionExpression="pathid = :id",
    ExpressionAttributeValues={
        ":id": location,
    },
)

block=str(data1[0]['blockpoint'])
data=response["Items"]
ans=""
index=0
ansi=0
a=sorted(data[0]["path"])
b=sorted(data[0]["route"])
for j in a:
    count=0
    for i in range(len(j)-1):
        if j[i]==block[0] and j[i+1]==block[1]:
            count+=1
            exit
    if count==0:
        ans=j
        ansi=int(index)
    else:
        index+=1
print(b[ansi])

pathtable=table=dynamodb.Table("path")
response = table.put_item(
   Item={
        'pathid': b[ansi],
    }
)












# client = pymongo.MongoClient("mongodb+srv://uvanshankar02:dzVRc4fqiyY7u5dw@cluster0.ejoioxu.mongodb.net/?retryWrites=true&w=majority")
  

# response = orders_table.put_item(
#    Item={
#         'pathid': "AB",
#         'route': "LLS",
#     }
# )

# dynamodb_client = boto3.client('dynamodb', region_name=region)

# tables = list(dynamodb.tables.all())
# print(tables)



# while 'LastEvaluatedKey' in response:
#     response = orders_table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
#     data.extend(response['Items'])

# for i in range(len(data)):
#     arr.append(data[i]['pathid'])

