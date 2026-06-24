"use client";
import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

export default function RulesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[#FFD700]">
            Règlement
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Bienvenue sur la plateforme de pronostics. Voici les règles du jeu :
          </p>
        </div>

        <div className="space-y-8">
          {/* Base Points Section */}
          <div className="card p-6 sm:p-8 animate-fade-in-up stagger-1 relative overflow-hidden" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-5 rounded-bl-full pointer-events-none"></div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-[var(--text)]">
              <span className="text-[var(--accent)]">1.</span> Les Points
            </h2>
            <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
              Voici comment vous pouvez gagner des points lors de chaque match :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-[var(--bg-elevated)] p-4 rounded-xl border border-[var(--border-subtle)]">
                <div>
                  <strong className="text-[var(--text)] block mb-1">Score Exact = +5 Points</strong>
                  <span className="text-sm text-[var(--text-muted)]">Le pronostic correspond exactement au score final.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[var(--bg-elevated)] p-4 rounded-xl border border-[var(--border-subtle)]">
                <div>
                  <strong className="text-[var(--text)] block mb-1">Différence de Buts = +3 Points</strong>
                  <span className="text-sm text-[var(--text-muted)]">Le pronostic a la bonne équipe gagnante et la bonne différence de buts.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[var(--bg-elevated)] p-4 rounded-xl border border-[var(--border-subtle)]">
                <div>
                  <strong className="text-[var(--text)] block mb-1">Bon Gagnant = +2 Points</strong>
                  <span className="text-sm text-[var(--text-muted)]">Le pronostic a désigné la bonne équipe gagnante.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Penalty Section */}
          <div className="card p-6 sm:p-8 animate-fade-in-up stagger-2 relative overflow-hidden" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-5 rounded-bl-full pointer-events-none"></div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-[var(--text)]">
              <span className="text-red-500">2.</span> Pénalité de Modification
            </h2>
            <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
              Si vous modifiez votre pronostic après l'avoir enregistré, une pénalité sera appliquée.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-xl">
              <div className="font-bold text-red-500 mb-2 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                Pénalité Fixe de 5%
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Si vous modifiez votre pronostic, une <strong className="text-red-400">pénalité fixe de 5%</strong> est appliquée sur les points gagnés pour ce match.
              </p>
            </div>
          </div>

          {/* Golden Ball Section */}
          <div className="card p-6 sm:p-8 animate-fade-in-up stagger-3 relative overflow-hidden" style={{ background: 'var(--bg-surface)', border: '1px solid #FFD70040' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD70005] to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] opacity-10 rounded-bl-full pointer-events-none"></div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-[#FFD700]">
              Le Ballon d'Or
            </h2>
            <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
              Le Ballon d'Or vous permet de multiplier vos points de manière stratégique.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 p-5 rounded-xl">
                <div className="font-bold text-[#FFD700] mb-1">Doublez vos Points</div>
                <p className="text-sm text-[var(--text-muted)]">L'activation d'un Ballon d'Or sur un match ajoute <strong>+100%</strong> à votre score pour ce match.</p>
              </div>
              <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 p-5 rounded-xl">
                <div className="font-bold text-[#FFD700] mb-1">Quantité Limitée</div>
                <p className="text-sm text-[var(--text-muted)]">Chaque participant reçoit exactement <strong>5 Ballons d'Or</strong> pour tout le tournoi. Utilisez-les judicieusement.</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 animate-fade-in-up stagger-4">
            <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              J'ai compris
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
