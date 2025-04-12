#!/bin/bash

# Constants
template_dir="../.templates"
template_names=(
  "web-app"
  "cli-app"
  "package"
)

# Validate the input
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: $0 <template_name> <source_path>"
    exit 1
fi

# Main script
script_path=$(realpath "$0") # Get the full path of this script
template_name="$1" # Get the name of the template
source_path=$(realpath "$2") # Get the full path of the target directory

# Generate Paths
script_dir=$(dirname "$script_path")
output_zip_dir=$(realpath "$script_dir/$template_dir")
output_zip="$output_zip_dir/$template_name.zip"

if [ ! -d "$source_path" ]; then
    echo "Target path does not exist or is not a directory."
    exit 1
fi

if [[ ! ${template_names[@]} =~ ${template_name} ]]; then
    echo "Invalid template name. Available templates: ${template_names[*]}"
    exit 1
fi

if [ ! -d "$output_zip_dir" ]; then
    mkdir -p "$output_zip_dir"
fi

echo "=> Creating $template_name template from source path: $source_path"
echo "====================================================================================================="

cd "$source_path" || exit 1 # Change to the source directory
rm $output_zip -rf # Remove the existing zip archive
zip -r "$output_zip" . || exit 1 # Create the zip archive

echo "====================================================================================================="
echo "=> Template saved successfully to $output_zip"