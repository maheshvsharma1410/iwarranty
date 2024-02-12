To execute the provided TypeScript program, you will need to follow these steps:


### Prerequisites


- Node.js and npm should be installed on your system. You can download and install them from the [official Node.js website](https://nodejs.org/).
- Ensure you have access to the `iw-tech-test-retailer-data.xlsx` file, which contains the data to be processed.


### Installation


Before running the program, you need to install the necessary packages. In this case, you need the `xlsx` package for working with Excel files and the TypeScript compiler (`tsc`) to compile the TypeScript code. Here's how to install them:


1. Open a terminal or command prompt.
2. Navigate to the directory where your TypeScript program is located.


```bash
cd path/to/your/directory
```


3. Install the required npm packages using the following command:


```bash
npm install xlsx typescript --save-dev
```


### Running the Program


Once the required packages are installed, you can run the TypeScript program to process the data from the Excel file and generate the JSON output. Here's how to do it:


1. Place the `iw-tech-test-retailer-data.xlsx` file in the same directory as your TypeScript file.
2. Open a terminal or command prompt.
3. Navigate to the directory containing your TypeScript file.


```bash
cd path/to/your/directory
```


4. Compile the TypeScript code to JavaScript using the TypeScript compiler (`tsc`). Run the following command:


```bash
npx tsc your_file_name.ts
```


Replace `your_file_name.ts` with the name of your TypeScript file.


5. After successful compilation, you will have a JavaScript file with the same name as your TypeScript file. You can now execute this JavaScript file using Node.js. Run the following command:


```bash
node your_file_name.js
```


### Output


The program will generate a JSON String  displayed in the console and file named `indexEntries.json` containing the processed data. You can find this file in the same directory where you executed the program.


### Additional Notes


- Ensure that the `xlsx` file (`iw-tech-test-retailer-data.xlsx`) is correctly formatted and accessible.
- Make sure you have appropriate permissions to read and write files in the directory where you execute the program.


Following these steps should allow you to execute the provided TypeScript program successfully and generate the desired JSON output. If you encounter any errors or issues, please refer to the error messages for troubleshooting or feel free to ask for further assistance.

