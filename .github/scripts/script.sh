#!/usr/bin/env bash
echo "$THING_I_NEED"

if [ "$THING_I_NEED" = "Hello World" ]; then
    echo "Strings are equal."
else
    echo "Strings are not equal."
fi