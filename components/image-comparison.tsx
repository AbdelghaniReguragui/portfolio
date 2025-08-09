'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function ImageComparison() {
  const [selectedImage, setSelectedImage] = useState<string>('abdelghani-reguragui.jpg');

  const images = [
    {
      src: '/images/abdelghani-reguragui.jpg',
      name: 'abdelghani-reguragui.jpg',
      id: 'image1'
    },
    {
      src: '/images/reguragui-abdelghani.jpg', 
      name: 'reguragui-abdelghani.jpg',
      id: 'image2'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Comparaison des Images de Profil</h2>
      
      {/* Sélecteur d'image */}
      <div className="flex gap-4 mb-8 justify-center">
        {images.map((img) => (
          <Button
            key={img.id}
            variant={selectedImage === img.name ? 'default' : 'outline'}
            onClick={() => setSelectedImage(img.name)}
          >
            {img.name}
          </Button>
        ))}
      </div>

      {/* Prévisualisation côte à côte */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {images.map((img) => (
          <div key={img.id} className="text-center">
            <h3 className="font-semibold mb-4">{img.name}</h3>
            <div className="relative mx-auto">
              {/* Simulation du style du portfolio */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={`Profile ${img.id}`}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-muted"><div class="text-6xl font-bold text-muted-foreground">AR</div></div>';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Critères d'évaluation */}
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Critères d'évaluation :</h3>
        <ul className="space-y-2 text-sm">
          <li>✅ <strong>Netteté et qualité</strong> : Image claire et bien définie</li>
          <li>✅ <strong>Cadrage</strong> : Position du visage dans le cercle</li>
          <li>✅ <strong>Éclairage</strong> : Visage bien éclairé</li>
          <li>✅ <strong>Expression</strong> : Professionnelle et accueillante</li>
          <li>✅ <strong>Background</strong> : Compatible avec les couleurs du site</li>
          <li>✅ <strong>Recadrage</strong> : Facilité pour garder 60% du haut</li>
        </ul>
      </div>
    </div>
  );
}
