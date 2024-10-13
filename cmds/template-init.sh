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
target_path_raw="$1"
template_name="$2" # Get the name of the template

# Validate the input
if [ -z "$target_path_raw" ] || [ -z "$template_name" ]; then
    echo "Usage: $script_path <target_path> <template_name>"
    exit 1
fi

if [ -d "$target_path_raw" ]; then
    echo "Target path already exists. Please specify a new directory."
    exit 1
else
    mkdir -p "$target_path_raw"
fi

# Process Inputs
target_path=$(realpath "$target_path_raw") # Get the full path of the target directory

# Generate Paths
script_dir=$(dirname "$script_path")
zip_file_dir=$(realpath "$script_dir/$template_dir")
zip_file="$zip_file_dir/$template_name.zip"

if [[ ! ${template_names[@]} =~ ${template_name} ]]; then
    echo "Invalid template name. Available templates: ${template_names[*]}"
    exit 1
fi

if [ ! -f "$zip_file" ]; then
    echo "Template file does not exist: $zip_file"
    exit 1
fi

echo "=> Scaffolding from $template_name template to target path: $target_path"
echo "====================================================================================================="
unzip "$zip_file" -d "$target_path" || exit 1 # Extract the zip archive
echo "====================================================================================================="
echo "=> Scaffolded successfully to $target_path"