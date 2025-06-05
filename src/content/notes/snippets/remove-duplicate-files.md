---
name: "Remove Duplicate Files"
dateCreated: 2025-05-29 00:00:00 +0700
datePublished: 2025-05-29 00:00:00 +0700
dateModifined: 2025-05-29 00:00:00 +0700
---

```python
import os
import re
import argparse

def find_and_remove_duplicate_files(directory_path, dry_run=True, remove_both_files=False):
  """
  Find and handles duplicate files in a directory based on the specified mode.

  Duplicate patterns are 'filename.ext' and 'filename(N).ext' (e.g., (1), (2), (3)...).
  - If `remove_both_files` is False (default): Only 'filename(N).ext' is targeted.
  - If `remove_both_files` is True: Both 'filename.ext' and 'filename(N).ext' are targeted.

  Args:
    directory_path (str):     The path to the directory to search for duplicate.
    dry_run (bool):           If True, only prints what would be deleted.
                              If False, performs the deletion.
    remove_both_files (bool): If True, remove both files in a pair.
                              If False, remove only the numbered file.
  """

  # Regex to find files like "filename(N).ext" where `N` is one or more digits.
  # Group 1: base filename (e.g., "document")
  # Group 2: number inside parentheses (e.g., "1", "23")
  # Group 3: file extension (e.g., ".txt")
  duplicate_pattern = re.compile(r'^(.*)\((\d+)\)(\.[^.]+)$')

  # Ensure absolute path for clarity.
  abs_directory_path = os.path.abspath(directory_path)

  if not os.path.isdir(abs_directory_path):
    print(f"Error: Directory not found at '{abs_directory_path}'.")")
    return
  
  # Print the absolute path.
  print(f"Scanning directory: {abs_directory_path}")

  if dry_run:
    print("--- DRY RUN MODE --- (No files will be deleted or modified)")
  else:
    print("--- LIVE MODE --- (Files will be targeted for deletion)")

  if remove_both_files:
    print("--- Mode: Removing BOTH files in identified duplicates pairs ---")
  else:
    print("--- Mode: Removing only numbered duplicates (e.g., 'file(1).ext') ---")
  
  files_processed = 0
  # Counts (original, numbered_duplicate) pairs found.
  pairs_identified = 0
  # Counts individual files successfully removed.
  files_removed_count = 0
  # Counts individual files that would be targeted.
  files_targeted_in_dry_run = 0

  for filename in os.listdir(abs_directory_path):
    files_processed += 1
    match = duplicate_pattern.match(filename)

    if match:
      base_name = match.group(1)
      extension = match.group(3)
      original_filename = f"{base_name}{extension}"

    duplicate_filepath = os.path.join(abs_directory_path, filename)
    original_filepath = os.path.join(abs_directory_path, original_filename)

    # Check if both the numbered file and its "original" counterpath exist as files.
    if os.path.isfile(duplicate_filepath) and os.path.isfile(original_filepath):
      pairs_identified += 1

      if remove_both_files:
        print(f"  Identified pair for '{original_filename}' and '{filename}'")
        if not dry_run:
          # Attempt to delete the numbered file.
          try:
            os.remove(duplicate_filepath)
            print(f"    DELETE: '{filename}'")
            files_removed_count += 1
          except OSError as e:
            print(f"    Error deleting '{filename}': {e}")
            
          # Attempt to delete the "original" file.
          # Check existence before attempting removal.
          if os.path.exists(original_filepath):
            try:
              os.remove(original_filepath)
              print(f"    DELETE: '{original_filename}'")
              files_removed_count += 1
            except OSError as e:
              print(f"    Error deleting '{original_filename}': {e}")
        # Dry run, remove_both_files is True.
        else:
          print(f"    WOULD DELETE: '{filename}'")
          files_targeted_in_dry_run += 1
          print(f"    WOULD DELETE: '{original_filename}'")
          files_targeted_in_dry_run += 1
      # remove_both_files is False (default: remove only duplicate files).
      else:
        print(f"  Identified duplicate for removal: '{filename}' (original: '{original_filename}')")
        if not dry_run:
          try:
            # Only delete "filename(N).ext".
            os.remove(duplicate_filepath)
            print(f"    DELETE: '{filename}'")
            files_removed_count += 1
          except OSError as e:
            print(f"    Error deleting '{filename}': {e}")
        # Dry run, remove_both_files is False.
        else:
          print(f"    WOULD DELETE: '{filename}'")
          files_targeted_in_dry_run += 1
    # Handling if the item matching (N) is a directory.
    elif os.path.isdir(duplicate_filepath):
      print(f"  Skipping directory: '{filename}'")

  print("\n--- Scan Complete ---")
  print(f"Total items scanned in directory: {files_processed}")
  print(f"Duplicate pairs identified: {pairs_identified}")
  if dry_run:
    print(f"Total files that would be removed: {files_targeted_in_dry_run}")")
  else:
    print(f"Total files removed: {files_removed_count}")

if __name__ == "__main__":
  parser = argparse.ArgumentParser(
    description="""Removes duplicate files based on 'filename.ext' and 
    'filename(N).ext' pattern. Defaults to removing only 'filename(N).ext'. 
    Use --all to remove both files in a pair. Defaults to scanning the 
    current directory if no path is provided."""
  )
  parser.add_argument(
    "directory",
    # Makes the argument optional.
    nargs='?',
    # Set default to the current working directory.
    default=os.getcwd(),
    help="The directory to scan. Defaults to the current directory if not specified."
  )
  parser.add_argument(
    "--live",
    action="store_true",
    help="Actually delete files. Default is dry run.",
  )
  parser.add_argument(
    "--all",
    action="store_true",
    help="If specified, remove all files in a duplicate pair. Default is to remove only 'file(N).ext'.","
  )

  args = parser.parse_args()

  # Get absolute path.
  directory_to_scan = os.path.abspath(args.directory)

  # Determine if it's a live run or dry run.
  is_dry_run = not args.live

  # Get the remove_both_files mode.
  is_remove_both_files = args.all

  find_and_remove_duplicate_files(directory_to_scan, dry_run=is_dry_run, remove_both_files=is_remove_both_files)

  if is_dry_run:
    live_command_example = f"python {os.path,basename(__file__)} \"{directory_to_scan}\" --live"
    if is_remove_both:
      # All flag to example if it was used.
      live_command_example += " --all"
    print("\nTo actually delete files with the current settings, run:")
    print(live_command_example)
```