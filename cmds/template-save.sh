#!/bin/bash

# Constants
template_dir="../.templates"
template_names=(
  "web-app"
  "cli-app"
  "package"
)

# Main script
script_path=$(realpath "$0")
template_name="${1:-all}"       # Default to all
source_path_raw="${2:-./templates}"         # Default to current directory
source_path=$(realpath "$source_path_raw")

# Generate Paths
script_dir=$(dirname "$script_path")
output_zip_dir=$(realpath "$script_dir/$template_dir")

# setup output directory
rm -rf "$output_zip_dir"
mkdir -p "$output_zip_dir"

save_template() {
    local name="$1"
    local src="$source_path/$name"
    local out_zip="$output_zip_dir/$name.zip"

    if [ ! -d "$src" ]; then
        echo "Error: save template failed due to '$name' not found at $src"
        exit 1
    fi

    echo "=> Saving '$name' template from $src"
    echo "-----------------------------------------------------------------------------------------------------"

    cd "$src" || { echo "Error: Failed to enter $src"; exist 1; }
    rm -f "$out_zip"
    zip -r -q "$out_zip" . || { echo "Error: Failed to zip $src"; exit 1; }

    echo "✅ Saved: $out_zip"
    echo
}

if [ "$template_name" == "all" ]; then
    for name in "${template_names[@]}"; do
        save_template "$name"
    done
else
    if [[ ! " ${template_names[@]} " =~ " ${template_name} " ]]; then
        echo "Invalid template name. Available templates: ${template_names[*]}"
        exit 1
    fi

    save_template "$template_name"
fi
