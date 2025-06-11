---
name: CSV (Comma-Separated Values)
dateCreated: 2025-06-11 11:00:00 +0700
---
A CSV (Comma-Separated Values) file is a simple text format used to store tabular data, such as a spreadsheet or database. Each line in the file represents a data record, and each record consists of one or more fields, separated by commas.

## Structure

A CSV file has a straightforward structure:

1. **Header Row (Optional but Recommended):** The first line of the file often contains the names of the columns. This header row provides a description of the data in each subsequent row.

2. **Data Rows:** Each subsequent line in the file represents a record of data, with the values for each column listed in the same order as the headers.

**Example:**

Consider a simple table of user information:

| Name       | City     | Age |
| ---------- | -------- | --- |
| John Doe   | New York | 30  |
| Jane Smith | London   | 25  |

The corresponding CSV file would look like this:

```csv
Name,City,Age
John Doe,New York,30
Jane Smith,London,25
```

## Handling Special Cases

### Special Characters

To ensure data is read correctly, CSV has rules for handling fields that contain special characters:

* **Fields with Commas:** If a field contains a comma, the entire field must be enclosed in double quotes (").

* **Fields with Double Quotes:** If a field contains a double quote, the quote inside the field must be escaped by another double quote, and the entire field must be enclosed in double quotes.

* **Line Breaks:** If a field contains a line break, the entire field must be enclosed in double quotes.

**Example with Special Characters:**

```csv
Name,Address,Description
"Doe, John","123 Main St","He said""Hello, World!"" and then left."
"Smith, Jane","456 Oak Ave, Suite 2","A friend of John's."
```

Result:

| Name        | Address              | Description                            |
| ----------- | -------------------- | -------------------------------------- |
| Doe, John   | 123 Main St          | He said "Hello, World!" and then left. |
| Smith, Jane | 456 Oak Ave, Suite 2 | A friend of John's.                    |

In this example:
* `"Doe, John"` is treated as a single field.

* `"He said ""Hello, World!"" and then left."` correctly includes the double quotes around "Hello, World!".

* The address for Jane Smith contains a comma and is correctly enclosed in quotes.

### Spaces around the delimiter (the comma)

The most widely cited standard for the CSV format is RFC 4180. According to this specification, **spaces are considered part of the data field and should not be ignored**.

This mean that:

```csv
Name, City, Age
John Doe, New York, 30
```

Would be interpreted as:

* **Row 1**: `"Name"`, `" City"`, `" Age"`

* **Row 2:** `"John Doe"`, `" New York"`, `" 30"`

Notice the leading spaces in the second and third fields of each row. The space is treated as part of the value itself, which is often not the intended outcome.

**The Practical Reality**

While the formal spec is strict, most modern CSV parsers and spreadsheet programs (like Microsoft Excel and Google Sheets) are more lenient and "forgiving". They anticipate that humans often add spaces for readability.

When you import a file with spaces around the commas, here is what typically happens:

* **Most Parsers will automatically trim the whitespace:** Software will usually strip leading and trailing spaces from unquoted fields. In the example, `" City"` would be imported simply as `"City"`.

* **Some Parsers have an option:** More advanced tools and programming libraries (like Python's `csv` module) often provide an option to control this behavior. For example, in Python, you can specify `skipinitialspace=True` to automatically remove whitespace that follows a delimiter.

**Conclusion: Should You Use Spaces?**

**It is strongly recommended to AVOID using spaces around the commas in CSV files.**

While it will likely be read correctly by many programs, it is not technically compliant with the RFC 4180 standard and can lead to unexpected problems:

* A script or a less "intelligent" program might interpret the spaces as part of the data, causing validation errors, failed lookups, or corrupted data.

* It creates ambiguity about whether the space is part of the data or just formatting.

The correct and safest way to format your CSV file is without the extra spaces. It's unambiguous, compliant with the formal specification, and guaranteed to be interpreted correctly by the widest range of software.