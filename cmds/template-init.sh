#!/bin/bash

# Constants
template_dir="../.templates"
template_names=(
  "web-app"
  "cli-app"
  "package"
)

# Main Script
script_path=$(realpath "$0") # Get the full path of this script
template_name="${1:-all}" # Get the name of the template or all
target_path_raw="${2:-./templates}" # Get the target path or default to ./templates

# Validate the input
if [ -z "$target_path_raw" ] || [ -z "$template_name" ]; then
    echo "Error: Missing arguments."
    echo "template_name: $template_name"
    echo "target_path: $target_path_raw"
    echo "Usage: $script_path <template_name|all> <target_path>"
    exit 1
fi

rm -rf "$target_path_raw" 
mkdir -p "$target_path_raw"

# Get real paths
target_path=$(realpath "$target_path_raw") # Full path of the target directory
script_dir=$(dirname "$script_path")
zip_file_dir=$(realpath "$script_dir/$template_dir")

scaffold_template() {
    local name="$1"
    local dest_path="$target_path/$name"
    local zip_file="$zip_file_dir/$name.zip"

    if [ ! -f "$zip_file" ]; then
        echo "Template file does not exist: $zip_file"
        exit 1
    fi

    echo "=> Scaffolding from $name template to $dest_path"
    echo "-----------------------------------------------------------------------------------------------------"
    mkdir -p "$dest_path"
    unzip -q "$zip_file" -d "$dest_path" || (echo "Failed to unzip $zip_file to $dest_path" && exit 1)
    echo "=> $name scaffolded successfully to $dest_path"
    echo
}

# Handle all or single template
if [ "$template_name" == "all" ]; then
    for name in "${template_names[@]}"; do
        scaffold_template "$name"
    done
else
    if [[ ! " ${template_names[@]} " =~ " ${template_name} " ]]; then
        echo "Invalid template name. Available templates: ${template_names[*]}"
        exit 1
    fi
    scaffold_template "$template_name"
fi
