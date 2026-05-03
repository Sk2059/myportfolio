#!/usr/bin/env bash
# Render runs this script every time you deploy.
# Exit immediately if any command fails.
set -o errexit

echo "==> Installing dependencies..."
pip install -r requirements.txt

echo "==> Collecting static files..."
python manage.py collectstatic --noinput

echo "==> Running database migrations..."
python manage.py migrate

echo "==> Build complete."