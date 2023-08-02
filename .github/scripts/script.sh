#!/usr/bin/env bash
echo "$THING_I_NEED"
VAR1="$THING_I_NEED"

echo "$VAR1"

if [ "$THING_I_NEED" = "Hello World" ]; then
    echo "Strings are equal."
else
    echo "Strings are not equal."
fi

curl --data-urlencode "q=$VAR1" "https://duckduckgo.com/"