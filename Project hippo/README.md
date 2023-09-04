# Hippo Project Structure

This document outlines the structure and contents of the `hippo/src` project.


## Directory Breakdown:

1. **parsers/**:
   - **pond.parser.js**: This file is responsible for parsing data, from a source named 'pond' represeting raw data captured from live events.

2. **presenters/**: This directory contains modules that are presenting data in a particular format.
   - **index.js**: Main file in the presenters directory.
   - **mostPopularCategory.js**: A file presenting data related to the most popular categories.
   - **mostPopularProducts.js**: A file for presenting data on the most popular products.

3. **stats/**: These modules focus on statistical operations or data analysis.
   - **CategoryListStat.js**: Performs statistical operations on category lists.
   - **NumericListStat.js**: Handles statistics for numeric lists.

4. **structs/**: This directory is dedicated to data structures, especially in the context of stories and events.
   - **RootResult.js**: Foundational structure or a base result type.
   - **SaleStory.js**: Data structure that defines or tracks a sales narrative.
   - **UserEvent.js**: Defines events related to users.
   - **UserStory.js**: Details user stories or narratives.
   - **index.js**: Main file in the structs directory.
   - **output.js**: A module likely defining output structures or methods.
   - **queries.js**: Contains query-related structures or functions.

### TO DO:
For greater clarity, adding inline comments or brief descriptions within the project.