#!/bin/sh

for file in $(find src -name "*.d.ts")
do
  echo "${file}"
  mv "${file}" "${${file}/src/dist}"
done
