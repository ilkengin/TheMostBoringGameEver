#!/bin/sh

echo "********************************************************"
echo "Starting edge-gateway "
echo "********************************************************"
java   $MEM_ARGS -Dspring.profiles.active=$PROFILE -jar app.jar