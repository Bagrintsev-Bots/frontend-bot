#!/bin/bash

# Чтение версии из app.yml (предполагается, что в файле только одно поле 'version')
version=$(grep 'CURRENT_VERSION:' ./version.yml | sed 's/^[ \t]*//' | tr -d '\n\r' | cut -d ' ' -f2)

# Получение текущего времени в формате timestamp (Unix timestamp)
timestamp=$(date +%s)

# Вывод JavaScript объекта
echo "" >> ./version.js
echo "window._version_ = {" >> ./version.js
echo "  version: '$version'," >> ./version.js
echo "  timestamp: '$timestamp'," >> ./version.js
echo "}" >> ./version.js
