

// Definir el pin del LED (GPIO2 es el LED integrado en la mayoría de ESP8266)
#define LED_PIN 2  // GPIO2 / D4

void setup() {
  // Inicializar comunicación serial para debugging
  Serial.begin(115200);
  Serial.println("\n\nIniciando programa de parpadeo LED ESP8266");
  
  // Configurar el pin del LED como salida
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Encender el LED
  digitalWrite(LED_PIN, LOW);   // En ESP8266, LOW enciende el LED integrado
  Serial.println("LED encendido");
  delay(1000);  // Esperar 1 segundo
  
  // Apagar el LED
  digitalWrite(LED_PIN, HIGH);  // En ESP8266, HIGH apaga el LED integrado
  Serial.println("LED apagado");
  delay(1000);  // Esperar 1 segundo
}
