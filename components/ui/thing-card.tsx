import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, 
} from "@/components/ui/card";

export default function ThingCard({ title='thing title', description='thing description', content='content', footer='thing footer' }) {
    return(
        <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{content}</p>
            </CardContent>
            <CardFooter>
              <p>{footer}</p>
            </CardFooter>
        </Card>
    );
}