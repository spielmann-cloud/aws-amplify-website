import math
import json
import logging

# AWS SDK 
import boto3

from time import gmtime, strftime 
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Create DynamoDb object
dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("my-ex-db")
now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime()) 

def lambda_handler(event, context):
    message = 'Hello from lambda'
    logger.info("## Input Parameters event: {0} and context: {1}".format(event, context))
    logger.info("type of event {0}".format(type(event)))
    body = json.loads(event.get("body"))
    
    first = int(body["base"])
    second = int(body["exponent"])
    
    result = first ** second
    response = table.put_item(
        Item = {
            'PrimaryID' : str(result),
            'LatestGreetingTime': now 
        }
    )
    return {
        'statusCode': 200,
        'body': json.dumps({'result':result})
    }