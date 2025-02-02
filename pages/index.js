import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";

export default function Home() {
  const [patients, setPatients] = useState([]);
  const [analyses, setAnalyses] = useState([]);
  const [sessions, setSessions] = useState([]);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Healy Analyse & Behandlungsprotokoll</h1>
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">Neuer Patient</h2>
          <Input placeholder="Name" />
          <Button>Patient hinzufügen</Button>
        </CardContent>
      </Card>
    </div>
  );
}

