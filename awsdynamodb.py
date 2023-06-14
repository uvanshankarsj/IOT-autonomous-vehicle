import boto3
from pprint import pprint
from boto3.dynamodb.conditions import Key

# boto3.setup_default_session(profile_name="Uvan Shankar S J")

table_name = "orders"
dynamodb = boto3.resource("dynamodb")
orders_table = dynamodb.Table(table_name)


def query_data():
    response = orders_table.query(
        KeyConditionExpression="order_id = :id and order_date = :dt",
        ExpressionAttributeValues={
            ":dt": "2022-06-28",
            ":id": "ord100",
        },
    )

    pprint(response["Items"])
    print(f"ScannedCount: {response['ScannedCount']}")

    # output
    """
    [{'item_count': Decimal('50'),
      'order_date': '2022-06-28',
      'order_id': 'ord100'
    }]
    ScannedCount: 1
    """
query_data()