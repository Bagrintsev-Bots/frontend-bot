#!/bin/bash

if [ -z "$1" ]; then
  echo "Example 1: $0 1.1.0 v1.0.0"
  echo "Example 2: $0 1.1.0 (автоматически определит последний тег)"
  exit 1
fi

cd scripts
./update-changelog.sh $1 $2
./update-version.sh $1
