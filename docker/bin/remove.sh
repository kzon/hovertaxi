set -e
source `dirname $0`/env.sh

${COMPOSE} down
docker volume prune -f
