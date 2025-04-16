import AreaCard from "./area-card";

export default function DetailedAreas() {
  return (
    <div className="py-16 px-8 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light font-sora mb-6">
            Nossas <span className="font-bold">áreas de atuação</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Conheça em detalhes as áreas em que o escritório Malab atua com excelência e comprometimento.
          </p>
        </div>

        <div className="space-y-12">
          <AreaCard
            title="Direito"
            titleHighlight="civil"
            description="Atuação ampla em questões contratuais, responsabilidade civil, direitos reais, obrigações, posse e propriedade. Representação em processos judiciais e administrativos, bem como em procedimentos extrajudiciais."
            imageSrc="/civil-areas.svg"
            imageAlt="Advogado atuando em caso de direito civil"
            reverse={true}
          />

          <AreaCard
            title="Direito"
            titleHighlight="empresarial"
            description="Consultoria e suporte jurídico para empresas de diversos portes. Atuação em contratos empresariais, constituição de sociedades, reestruturações societárias, dissoluções, compliance e prevenção de litígios."
            imageSrc="/empresarial-areas.svg"
            imageAlt="Consultoria empresarial jurídica"
          />

          <AreaCard
            title="Direito"
            titleHighlight="trabalhista"
            description="Assessoria completa nas relações de trabalho, incluindo consultoria preventiva, elaboração e revisão de documentos, representação em processos judiciais e administrativos, e negociações coletivas."
            imageSrc="/trabalhista-areas.svg"
            imageAlt="Advogado especializado em direito trabalhista"
            reverse={true}
          />

          <AreaCard
            title="Direito"
            titleHighlight="tributário"
            description="Planejamento tributário estratégico, análise de operações para otimização fiscal, defesa em autos de infração e processos administrativos, recuperação de tributos pagos indevidamente e consultoria preventiva."
            imageSrc="/tributario-areas.svg"
            imageAlt="Consultoria tributária especializada"
          />

          <AreaCard
            title="Direito de"
            titleHighlight="família e sucessões"
            description="Atendimento personalizado em questões familiares, incluindo divórcio, partilha de bens, guarda de filhos, pensão alimentícia, inventários, testamentos e planejamento sucessório com foco na preservação patrimonial."
            imageSrc="/familia-areas.svg"
            imageAlt="Advogado especializado em direito de família"
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
} 