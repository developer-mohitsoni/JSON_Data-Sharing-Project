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
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default JsonEditor;
