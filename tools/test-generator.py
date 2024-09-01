#!/usr/bin/env python3

import sys
import math
import urllib.parse
import http.client as httplib
import time
import random

# Define los datos para cada ID
data = {
    '6521478600': {
        'waypoints': [
    (10.391045, -75.479934),  # Entrada de la ciudad cerca del aeropuerto
    (10.394520, -75.481834),  # Av. San Martín, zona hotelera
    (10.398580, -75.482190),  # Playa de Bocagrande
    (10.400800, -75.480825),  # Centro histórico
    (10.402610, -75.478960),  # Murallas de Cartagena
    (10.405020, -75.477415)   # Castillo de San Felipe de Barajas
        ],
        'driver_id': '123456'
    },
    '6521478601': {
        'waypoints': [
    (10.393278, -75.481845),  # Inicio del Paseo de la Castellana, cerca de la intersección con la Av. San Martín
    (10.394706, -75.482293),  # Cerca del Centro Comercial La Mansion
    (10.396075, -75.482742),  # Aprox. frente al Hotel Intercontinental
    (10.397506, -75.483145),  # Cerca del edificio Bancolombia
    (10.398931, -75.483524),  # Frente al edificio de la Cámara de Comercio
    (10.400366, -75.483910)   # Final del Paseo de la Castellana, cerca del Parque de la Marina
        ],
        'driver_id': '654321'
    },
    '6521478602': {
        'waypoints': [
    (10.423965, -75.514368),  # Iglesia María Auxiliadora
    (10.424360, -75.514804),  # Calle aledaña a la iglesia
    (10.424780, -75.515240),  # Cerca del Parque de la Marina
    (10.424956, -75.515745),  # Calle frente al parque
    (10.424595, -75.515954),  # Cerca del Centro Comercial La Serrezuela
    (10.423900, -75.515350)   # Regreso a la Iglesia María Auxiliadora
        ],
        'driver_id': '654322'
    },
    '6521478603': {
        'waypoints': [
    (10.437112, -75.508786),  # Inicio cerca del Centro Comercial La Boquilla
    (10.438036, -75.508020),  # Playa de La Boquilla
    (10.439108, -75.507260),  # Punto a lo largo de la playa
    (10.440350, -75.506580),  # Cerca del Hotel Radisson
    (10.441870, -75.505900),  # Punto cerca del Parque de La Boquilla
    (10.442920, -75.504830)   # Final en la zona de las casas de playa
        ],
        'driver_id': '654323'
    }
    # Agrega más IDs y conjuntos de datos aquí según sea necesario
}

server = 'localhost'
port = 8082
period = 1
step = 0.001
device_speed = 40

def generate_points(waypoints, step):
    points = []
    for i in range(0, len(waypoints)):
        (lat1, lon1) = waypoints[i]
        (lat2, lon2) = waypoints[(i + 1) % len(waypoints)]
        length = math.sqrt((lat2 - lat1) ** 2 + (lon2 - lon1) ** 2)
        count = int(math.ceil(length / step))
        for j in range(0, count):
            lat = lat1 + (lat2 - lat1) * j / count
            lon = lon1 + (lon2 - lon1) * j / count
            points.append((lat, lon))
    return points

def send(conn, id, waypoints, lat, lon, altitude, course, speed, battery, alarm, ignition, accuracy, rpm, fuel, driverUniqueId):
    params = (('id', id), ('timestamp', int(time.time())), 
              ('lat', lat), ('lon', lon), 
              ('altitude', altitude), ('bearing', course), ('speed', speed), ('batt', battery)
              )
    if alarm:
        params = params + (('alarm', 'sos'),)
    if ignition:
        params = params + (('ignition', 'true'),)
    else:
        params = params + (('ignition', 'false'),)
    if accuracy:
        params = params + (('accuracy', accuracy),)
    if rpm:
        params = params + (('rpm', rpm),)
    if fuel:
        params = params + (('fuel', fuel),)
    if driverUniqueId:
        params = params + (('driverUniqueId', driverUniqueId),)
    conn.request('POST', '/?' + urllib.parse.urlencode(params))
    print(urllib.parse.urlencode(params))
    print(conn.getresponse().read())

def course(lat1, lon1, lat2, lon2):
    lat1 = lat1 * math.pi / 180
    lon1 = lon1 * math.pi / 180
    lat2 = lat2 * math.pi / 180
    lon2 = lon2 * math.pi / 180
    y = math.sin(lon2 - lon1) * math.cos(lat2)
    x = math.cos(lat1) * math.sin(lat2) - math.sin(lat1) * math.cos(lat2) * math.cos(lon2 - lon1)
    return (math.atan2(y, x) % (2 * math.pi)) * 180 / math.pi

index = 0

conn = httplib.HTTPConnection(server, port)

while True:
    for id, info in data.items():
        waypoints = info['waypoints']
        driver_id = info['driver_id']
        points = generate_points(waypoints, step)
        
        (lat1, lon1) = points[index % len(points)]
        (lat2, lon2) = points[(index + 1) % len(points)]
        altitude = 50
        speed = device_speed if (index % len(points)) != 0 else 0
        alarm = (index % 10) == 0
        battery = random.randint(0, 100)
        ignition = (index / 10 % 2) != 0
        accuracy = 100 if (index % 10) == 0 else 0
        rpm = random.randint(500, 4000)
        fuel = random.randint(0, 80)
        driverUniqueId = driver_id if (index % len(points)) == 0 else False
        
        send(conn, id, waypoints, lat1, lon1, altitude, course(lat1, lon1, lat2, lon2), speed, battery, alarm, ignition, accuracy, rpm, fuel, driverUniqueId)
        time.sleep(period)
    
    index += 1
