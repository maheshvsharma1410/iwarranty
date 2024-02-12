"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const xlsx = require("xlsx");
// Read the spreadsheet file
let rawData;
try {
    const workbook = xlsx.readFile('iw-tech-test-retailer-data.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    // Convert sheet to JSON
    rawData = xlsx.utils.sheet_to_json(sheet);
}
catch (error) {
    console.error('Error reading the spreadsheet:', error);
    process.exit(1);
}
// Process data and generate index entries
const indexEntries = rawData.map((entry) => {
    return {
        directory_category: entry.directory_category?.split(';') ?? [],
        content_children_count: parseInt(entry.content_children_count) ?? 0,
        directory_contact: {
            email: entry.directory_contact__email ?? '',
            fax: entry.directory_contact__fax ?? '',
            mobile: entry.directory_contact__mobile ?? '',
            phone: entry.directory_contact__phone ?? '',
            website: entry.directory_contact__website ?? ''
        },
        content_post_id: parseInt(entry.content_post_id) ?? 0,
        content_post_slug: entry.content_post_slug ?? '',
        content_body: entry.content_body ?? '',
        directory_location: {
            street: entry.directory_location__street ?? '',
            city: entry.directory_location__city ?? '',
            country: entry.directory_location__country ?? '',
            address: entry.directory_location__address ?? '',
            lat: parseFloat(entry.directory_location__lat) ?? 0,
            lng: parseFloat(entry.directory_location__lng) ?? 0,
            zip: entry.directory_location__zip ?? '',
            state: entry.directory_location__state ?? ''
        },
        directory_social: {
            facebook: entry.directory_social__facebook ?? '',
            googleplus: entry.directory_social__googleplus ?? '',
            twitter: entry.directory_social__twitter ?? ''
        },
        content_post_status: entry.content_post_status ?? '',
        content_post_title: entry.content_post_title ?? ''
    };
});
const jsonOutput = JSON.stringify(indexEntries, null, 2);
// Write JSON output to a file
fs.writeFileSync('indexEntries.json', jsonOutput);
// Output JSON index entries
indexEntries.forEach((entry) => {
    console.log(JSON.stringify(entry));
});
