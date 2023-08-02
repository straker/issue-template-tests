#!/usr/bin/env bash


function test() { 
  local secret="$1"

  echo "secret: $secret"

}

test "$1"
