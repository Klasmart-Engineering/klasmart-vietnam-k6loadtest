#!/bin/bash
SCRIPT=${1:-"kidsloop-assessment-service/multi_scoreByUserTest.js"}
VUS=${2:-"10"}
DURATION=${2:-"1m"}
RATE=${3:-"50"}

URL="https://hooks.slack.com/services/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"

### IMPORTANT ###
CHANNEL=${1:-"#klvn-newrelic-notif"}


OUTPUT=`k6 run -e duration=${DURATION} -e vus=${VUS} -e rate=${RATE} ${SCRIPT} | tail -50 | sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2})?)?[mGK]//g"`

MESSAGE="k6 run -e duration=${DURATION} -e vus=${VUS} -e rate=${RATE} ${SCRIPT}"
MESSAGE="$MESSASE"

echo $MESSAGE

# curl -X POST --data-urlencode "payload={\"channel\": \"${CHANNEL}\", \"username\": \"K6 Loadtest\", \"text\": \"${MESSAGE}\", \"icon_emoji\": \"\"}" ${URL}
