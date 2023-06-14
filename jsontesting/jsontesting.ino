#include <WiFi.h>
#include <MongoDB.h>

const char *ssid = "H";
const char *password = "12345678";

const char *mongoHost = "YOUR_MONGO_HOST";
const int mongoPort = 27017;

const char *mongoUserName = "YOUR_MONGO_USERNAME";
const char *mongoPassword = "YOUR_MONGO_PASSWORD";
fHjeqUqyUDuu8bMLRwOcei5eDPJjTXw91Tqoo58gFwe6veGkNiaNzJ92gm3O1IOZ
void setup() {
  Serial.begin(115200);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("WiFi connected!");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  MongoDBClient client(mongoHost, mongoPort);
  client.connect(mongoUserName, mongoPassword);

  Serial.println("Connected to MongoDB!");
}

void loop() {
  // Get the current time.
  unsigned long now = millis();

  // Create a document to store the current time.
  MongoDBDocument doc;
  doc["time"] = now;

  // Insert the document into the database.
  client.insert("test", doc);

  // Wait for 1 second.
  delay(1000);
}
