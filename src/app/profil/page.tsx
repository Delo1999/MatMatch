"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { X, Plus, Save } from "lucide-react";

export default function ProfilPage() {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);
  const [dietaryPrefs, setDietaryPrefs] = useState<string[]>([]);
  const [newAllergy, setNewAllergy] = useState("");
  const [newDietaryPref, setNewDietaryPref] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Ladda profil när komponenten mountas
  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/profile", {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setName(data.profile.name || "");
        setAllergies(data.profile.allergies || []);
        setDietaryPrefs(data.profile.dietaryPrefs || []);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const addAllergy = () => {
    if (newAllergy.trim() && !allergies.includes(newAllergy.trim())) {
      setAllergies([...allergies, newAllergy.trim()]);
      setNewAllergy("");
    }
  };

  const removeAllergy = (allergyToRemove: string) => {
    setAllergies(allergies.filter((allergy) => allergy !== allergyToRemove));
  };

  const addDietaryPref = () => {
    if (
      newDietaryPref.trim() &&
      !dietaryPrefs.includes(newDietaryPref.trim())
    ) {
      setDietaryPrefs([...dietaryPrefs, newDietaryPref.trim()]);
      setNewDietaryPref("");
    }
  };

  const removeDietaryPref = (prefToRemove: string) => {
    setDietaryPrefs(dietaryPrefs.filter((pref) => pref !== prefToRemove));
  };

  const saveProfile = async () => {
    try {
      setSaving(true);
      setMessage("");

      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: name.trim() || undefined,
          allergies,
          dietaryPrefs,
        }),
      });

      if (response.ok) {
        setMessage("Profil sparad framgångsrikt!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        const error = await response.json();
        setMessage(`Fel: ${error.error}`);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      setMessage("Kunde inte spara profilen");
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-gray-600">
              Du måste vara inloggad för att se din profil.
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Hero Section */}
      <section className="relative h-110 md:h-[500px] bg-gradient-to-br from-green-600 via-emerald-700 to-green-800">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg- bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 text-center h-full flex flex-col justify-center">
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 md:mb-6">
              <span className="text-5xl pb-1">👤</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 pb-6 md:pb-6 drop-shadow-lg leading-tight">
            Min
            <br />
            <span className="text-emerald-200">profil</span>
          </h1>
          <h2 className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md leading-relaxed">
            Hantera dina inställningar och personliga preferenser.
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <span>⚙️</span>
            <span>Inställningar</span>
            <span>•</span>
            <span>🚫</span>
            <span>Allergier</span>
            <span>•</span>
            <span>❤️</span>
            <span>Preferenser</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm border-green-100 gap-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-gray-800 pt-5">
              Profilinställningar
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Anpassa din MatMatch-upplevelse
            </p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Laddar profil...</p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Användarinfo */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-6xl">👨‍🍳</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Hej, {user?.name || user?.email}!
                  </h3>
                  <p className="text-gray-600">Din personliga matassistent</p>
                </div>

                {/* Meddelanden */}
                {message && (
                  <div
                    className={`p-4 rounded-lg text-center ${
                      message.includes("Fel")
                        ? "bg-red-50 text-red-700"
                        : "bg-green-50 text-green-700"
                    }`}
                  >
                    {message}
                  </div>
                )}

                {/* Namn */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Namn
                  </label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ditt namn (valfritt)"
                    className="w-full"
                  />
                </div>

                {/* Allergier */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    🚫 Allergier
                  </h4>
                  <p className="text-sm text-gray-600">
                    Lägg till allergier så vi kan undvika dem i receptförslag
                  </p>

                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={newAllergy}
                      onChange={(e) => setNewAllergy(e.target.value)}
                      placeholder="T.ex. nötter, ägg, gluten"
                      onKeyPress={(e) => e.key === "Enter" && addAllergy()}
                      className="flex-1"
                    />
                    <Button onClick={addAllergy} size="sm" variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {allergies.map((allergy, index) => (
                      <Badge
                        key={index}
                        variant="destructive"
                        className="flex items-center gap-1"
                      >
                        {allergy}
                        <button
                          onClick={() => removeAllergy(allergy)}
                          className="ml-1 hover:bg-red-700 rounded-full"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Kostpreferenser */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    ❤️ Kostpreferenser
                  </h4>
                  <p className="text-sm text-gray-600">
                    Berätta om dina kostpreferenser för bättre receptförslag
                  </p>

                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={newDietaryPref}
                      onChange={(e) => setNewDietaryPref(e.target.value)}
                      placeholder="T.ex. vegetarian, vegansk, keto, lchf"
                      onKeyPress={(e) => e.key === "Enter" && addDietaryPref()}
                      className="flex-1"
                    />
                    <Button
                      onClick={addDietaryPref}
                      size="sm"
                      variant="outline"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dietaryPrefs.map((pref, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {pref}
                        <button
                          onClick={() => removeDietaryPref(pref)}
                          className="ml-1 hover:bg-gray-400 rounded-full"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Spara knapp */}
                <div className="text-center pt-4">
                  <Button
                    onClick={saveProfile}
                    disabled={saving}
                    className="bg-green-600 hover:bg-green-700 text-white px-8"
                  >
                    {saving ? (
                      "Sparar..."
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Spara profil
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
