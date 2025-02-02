import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectItem } from "@/components/ui/select";

export default function HealyApp() {
  const [patients, setPatients] = useState([]);
  const [analyses, setAnalyses] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [newPatient, setNewPatient] = useState({ name: "", email: "", phone: "" });
  const [newAnalysis, setNewAnalysis] = useState({ patient: "", module: "", notes: "" });
  const [newSession, setNewSession] = useState({ patient: "", program: "", duration: "", feedback: "" });

  const addPatient = () => {
    if (newPatient.name) {
      setPatients([...patients, newPatient]);
      setNewPatient({ name: "", email: "", phone: "" });
    }
  };

  const addAnalysis = () => {
    if (newAnalysis.patient && newAnalysis.module) {
      setAnalyses([...analyses, newAnalysis]);
      setNewAnalysis({ patient: "", module: "", notes: "" });
    }
  };

  const addSession = () => {
    if (newSession.patient && newSession.program) {
      setSessions([...sessions, newSession]);
      setNewSession({ patient: "", program: "", duration: "", feedback: "" });
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Healy Analyse & Behandlungsprotokoll</h1>
      
      {/* Patientenverwaltung */}
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">Neuer Patient</h2>
          <Input placeholder="Name" value={newPatient.name} onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })} />
          <Input placeholder="E-Mail" value={newPatient.email} onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })} />
          <Input placeholder="Telefon" value={newPatient.phone} onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })} />
          <Button onClick={addPatient}>Patient hinzufügen</Button>
        </CardContent>
      </Card>

      {/* Analyse */}
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">Neue Healy-Analyse</h2>
          <Select onValueChange={(value) => setNewAnalysis({ ...newAnalysis, patient: value })}>
            {patients.map((p, index) => (
              <SelectItem key={index} value={p.name}>{p.name}</SelectItem>
            ))}
          </Select>
          <Select onValueChange={(value) => setNewAnalysis({ ...newAnalysis, module: value })}>
            <SelectItem value="Aura">Aura-Analyse</SelectItem>
            <SelectItem value="Resonanz">Resonanz-Analyse</SelectItem>
            <SelectItem value="Meridian">Meridian-Analyse</SelectItem>
          </Select>
          <Textarea placeholder="Notizen" value={newAnalysis.notes} onChange={(e) => setNewAnalysis({ ...newAnalysis, notes: e.target.value })} />
          <Button onClick={addAnalysis}>Analyse speichern</Button>
        </CardContent>
      </Card>

      {/* Behandlungsprotokoll */}
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">Neue Behandlungssitzung</h2>
          <Select onValueChange={(value) => setNewSession({ ...newSession, patient: value })}>
            {patients.map((p, index) => (
              <SelectItem key={index} value={p.name}>{p.name}</SelectItem>
            ))}
          </Select>
          <Input placeholder="Angewandtes Programm" value={newSession.program} onChange={(e) => setNewSession({ ...newSession, program: e.target.value })} />
          <Input placeholder="Dauer (Minuten)" type="number" value={newSession.duration} onChange={(e) => setNewSession({ ...newSession, duration: e.target.value })} />
          <Textarea placeholder="Feedback / Reaktion" value={newSession.feedback} onChange={(e) => setNewSession({ ...newSession, feedback: e.target.value })} />
          <Button onClick={addSession}>Sitzung speichern</Button>
        </CardContent>
      </Card>
    </div>
  );
}
