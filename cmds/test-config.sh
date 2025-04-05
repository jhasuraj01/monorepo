#!/bin/bash

# Main Script
script_path=$(realpath "$0") # Get the full path of this script
script_dir=$(dirname "$script_path")

# Packages
template_init_path="$script_dir/template-init.sh"
template_save_path="$script_dir/template-save.sh"

# Output Folder
templates_out_dir="$script_dir/../templates"

# create templates folder for updating and testing templates
rm -rf "$templates_out_dir"
mkdir -p "$templates_out_dir"

# Init all templates
chmod +x "$template_init_path"
"$template_init_path" "package" "$templates_out_dir/package"
"$template_init_path" "cli-app" "$templates_out_dir/cli-app"
"$template_init_path" "web-app" "$templates_out_dir/web-app"

# remove existing package-lock.yaml
rm -rf "$script_dir/../package-lock.yaml"

# Update all packages
pnpm i
pnpm update
pnpm update:packages
pnpm clear:all

# Test all packages
pnpm i
pnpm build
pnpm format
pnpm lint
pnpm build
pnpm typecheck:src
pnpm typecheck:test
pnpm test
pnpm lint:check
pnpm format:check
pnpm clear:all

# Save all templates
chmod +x "$template_save_path"
"$template_save_path" "package" "$templates_out_dir/package"
"$template_save_path" "cli-app" "$templates_out_dir/cli-app"
"$template_save_path" "web-app" "$templates_out_dir/web-app"

# Cleanup
rm -rf "$templates_out_dir"

# Remove references to the templates from the package-lock.yaml
pnpm i

# Done
echo "Success"