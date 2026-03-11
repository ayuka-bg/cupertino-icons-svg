#!/usr/bin/env bash
# Ensures the cupertino_icons source is available from the Flutter packages
# submodule by enabling sparse-checkout so only third_party/packages/cupertino_icons
# is checked out. Run from repo root after: git submodule update --init

set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SUBMODULE="$ROOT/_flutter_packages"

if [[ ! -d "$SUBMODULE/.git" ]]; then
  echo "Submodule not found. Run from repo root: git submodule update --init"
  exit 1
fi

cd "$SUBMODULE"
git sparse-checkout init --cone
git sparse-checkout set third_party/packages/cupertino_icons
echo "Sparse-checkout set. Cupertino icons source is at _flutter_packages/third_party/packages/cupertino_icons"
