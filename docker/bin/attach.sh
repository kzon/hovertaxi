source `dirname $0`/env.sh

${COMPOSE} exec ${@:1} /bin/bash