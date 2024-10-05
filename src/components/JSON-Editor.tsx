"use client";
import AddJsonDialog from "./Add-Json-Dialog";
import JsonDataTable from "./JSON-Data-Table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const JsonEditor = () => {
  const handleSave = async (jsonName: string, jsonData: string) => {
    const response = await fetch("/api/json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: jsonName,
        content: jsonData,
      }),
    });

    if (response.ok) {
      console.log("data successfully added");
    } else {
      console.log("something went wrong!");
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved JSON data</CardTitle>
        <CardDescription>View and share your saved JSON data.</CardDescription>
      </CardHeader>
      <CardContent>
        <JsonDataTable />
      </CardContent>
      <CardFooter>
        <AddJsonDialog onSave={handleSave} />
      </CardFooter>
    </Card>
  );
};

export default JsonEditor;
