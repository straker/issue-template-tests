#!/usr/bin/env bash
echo "$THING_I_NEED"
VAR1="$THING_I_NEED"

echo "$VAR1"
VAR2=$(echo "$VAR1" | sed -r 's/([A-Za-z])/\1_/g')
echo "VAR2: $VAR2"

if [ "$THING_I_NEED" = "Hello World" ]; then
    echo "Strings are equal."
else
    echo "Strings are not equal."
fi

curl --data-urlencode "q=$VAR1 fizbuzbaz" "https://duckduckgo.com/"