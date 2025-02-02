import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectItem } from "../components/ui/select";

export default function Home() {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState("");
  const [analyses, setAnalyses] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [newAnalysis, setNewAnalysis] = useState({ patient: "", module: "", notes: "" });
  const [newSession, setNewSession] = useState({ patient: "", program: "", duration: "", feedback: "" });

  const addPatient = () => {
    if (newPatient.trim()) {
      setPatients([...patients, newPatient]);
      setNewPatient("");
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
      <h1 className="text-2xl font-bold text-center">Healy Analyse & Behandlungsprotokoll</h1>

      {/* Patientenverwaltung */}
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">Patientenverwaltung</h2>
          <Input 
            placeholder="Patientenname eingeben" 
            value={newPatient} 
            onChange={(e) => setNewPatient(e.target.value)} 
          />
          <Button onClick={addPatient}>Patient hinzufügen</Button>
          
          <ul className="mt-4">
            {patients.map((patient, index) => (
              <li key={index} className="border p-2 rounded mt-2">{patient}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Healy Analyse */}
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">Neue Healy-Analyse</h2>
          <Select onChange={(e) => setNewAnalysis({ ...newAnalysis, patient: e.target.value })}>
            <SelectItem value="">Patient auswählen</SelectItem>
            {patients.map((p, index) => (
              <SelectItem key={index} value={p}>{p}</SelectItem>
            ))}
          </Select>
          <Select onChange={(e) => setNewAnalysis({ ...newAnalysis, module: e.target.value })}>
            <SelectItem value="">Analyse-Modul wählen</SelectItem>
            <SelectItem value="Aura">Aura-Analyse</SelectItem>
            <SelectItem value="Resonanz">Resonanz-Analyse</SelectItem>
            <SelectItem value="Meridian">Meridian-Analyse</SelectItem>
          </Select>
          <Textarea 
            placeholder="Zusätzliche Notizen" 
            value={newAnalysis.notes} 
            onChange={(e) => setNewAnalysis({ ...newAnalysis, notes: e.target.value })} 
          />
          <Button onClick={addAnalysis}>Analyse speichern</Button>

          <ul className="mt-4">
            {analyses.map((analysis, index) => (
              <li key={index} className="border p-2 rounded mt-2">
                <strong>{analysis.patient} - {analysis.module}</strong>
                <p>{analysis.notes}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Behandlungsprotokoll */}
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">Behandlungssitzung</h2>
          <Select onChange={(e) => setNewSession({ ...newSession, patient: e.target.value })}>
            <SelectItem value="">Patient auswählen</SelectItem>
            {patients.map((p, index) => (
              <SelectItem key={index} value={p}>{p}</SelectItem>
            ))}
          </Select>
          <Input 
            placeholder="Angewandtes Programm" 
            value={newSession.program} 
            onChange={(e) => setNewSession({ ...newSession, program: e.target.value })} 
          />
          <Input 
            placeholder="Dauer (Minuten)" 
            type="number" 
            value={newSession.duration} 
            onChange={(e) => setNewSession({ ...newSession, duration: e.target.value })} 
          />
          <Textarea 
            placeholder="Feedback / Reaktion" 
            value={newSession.feedback} 
            onChange={(e) => setNewSession({ ...newSession, feedback: e.target.value })} 
          />
          <Button onClick={addSession}>Sitzung speichern</Button>

          <ul className="mt-4">
            {sessions.map((session, index) => (
              <li key={index} className="border p-2 rounded mt-2">
                <strong>{session.patient} - {session.program}</strong>
                <p>Dauer: {session.duration} Minuten</p>
                <p>{session.feedback}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
