#!/bin/bash

# Step 1: Install TypeScript if not already
if ! command -v tsc &> /dev/null; then
  echo "Installing TypeScript..."
  npm install -g typescript
else
  echo "TypeScript version: $(tsc -v)"
fi

# Step 2: Find all tsconfig.json files and compile with them
found_any=false
while IFS= read -r -d '' config_path; do
  dir=$(dirname "$config_path")
  echo "Compiling in: $dir"
  (cd "$dir" && tsc)
  found_any=true
done < <(find . -type f -name "tsconfig.json" -print0)

if [ "$found_any" = false ]; then
  echo "No tsconfig.json found. Creating one in current dir..."

  cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "allowJs": true,
    "checkJs": false,
    "noEmitOnError": false
  },
  "include": [
    "**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
EOF

  echo "Compiling..."
  tsc
fi
