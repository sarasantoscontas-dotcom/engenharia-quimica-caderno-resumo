(() => {
 'use strict';
 const $=s=>document.querySelector(s);
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const tones=['pink','blue','lilac','yellow','mint','peach'],tone=i=>tones[i%tones.length];
 function renderPresentation(d){
  $('#overview').innerHTML=d.overview.map(([title,text,target,icon],i)=>`<a class="overview-card ${tone(i)}" href="#${target}"><div class="cover"><span aria-hidden="true">${icon}</span><i aria-hidden="true"></i></div><div class="card-body"><small>Meu caderno de Engenharia Química</small><h3>${title}</h3><p>${text}</p><span class="card-link">Conhecer esta área ↗</span></div></a>`).join('');
  $('#week-grid').innerHTML=d.week.map((day,i)=>`<article class="day-column ${tone(i)}"><header><span>${day.day}</span><strong>${day.date}</strong><p>${day.focus}</p></header>${day.events.map(([time,title,text,color])=>`<div class="event ${color}"><time>${time}</time><h4>${title}</h4><p>${text}</p></div>`).join('')}</article>`).join('');
  $('#day-explanations').innerHTML=d.week.map((day,i)=>`<article class="day-story"><header class="${tone(i)}"><span class="date-badge">${day.date}</span><div><small>${day.day}</small><h4>${day.focus}</h4></div></header><div class="story-body"><p>${day.explanation}</p><p>${day.next}</p></div></article>`).join('');
  $('#agenda-details').innerHTML=d.agendaDetails.map(([tag,title,text,items],i)=>`<article class="agenda-panel"><span class="script">${tag}</span><h3>${title}</h3><p>${text}</p><ul>${items.map(item=>`<li class="${tone(i+1)}">${item}</li>`).join('')}</ul></article>`).join('');
  $('#periods').innerHTML=d.periods.map(([stage,title,subjects,text],i)=>`<article class="period-card ${tone(i)}"><span class="eyebrow">${stage}</span><h3>${title}</h3><p class="period-subjects">${subjects}</p><p>${text}</p></article>`).join('');
  $('#research').innerHTML=d.research.map(([kind,title,example,items],i)=>`<article class="research-card ${tone(i+1)}"><span class="script">${kind}</span><h3>${title}</h3><p>${example}</p><ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul></article>`).join('');
  $('#benefits').innerHTML=d.benefits.map(([title,text],i)=>`<article class="benefit-card ${tone(i)}"><h3>${title}</h3><p>${text}</p></article>`).join('');
  $('#faq').innerHTML=d.faq.map(([q,a])=>`<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join('');
 }
 function screen(title,body){return `<div class="screen"><div class="screen-bar"><span aria-hidden="true">● ● ●</span><small>Caderno de Engenharia Química · ${title}</small></div>${body}</div>`;}
 function rows(items){return items.map(([a,b],i)=>`<div class="screen-row ${tone(i)}"><strong>${esc(a)}</strong><span>${esc(b)}</span></div>`).join('');}
 function renderScreens(topics){
  const entries=[
   ['Biblioteca','Os assuntos aparecem com suas conexões.','A organização por matéria ajuda a voltar à base necessária para resolver o problema.',screen('Resumos',`<div class="screen-workspace"><aside><b>Meu caderno</b><span class="selected">Resumos</span><span>Flashcards</span><span>Agenda</span><span>Laboratório</span><span>TCC</span></aside><div class="screen-content"><small>BIBLIOTECA DE ESTUDO</small><h4>Seu estudo por disciplina</h4>${rows(topics.slice(0,5).map(t=>[t.title,t.area]))}</div></div>`)],
   ['Leitura','Conceito, relação e aplicação.','O tema liga a equação às hipóteses, às unidades e ao significado do resultado.',screen('Balanços','<div class="screen-content"><small>PROCESSOS / MISTURA</small><h4>O balanço começa na fronteira.</h4><p>Defina o sistema, a base de cálculo e as correntes que atravessam a fronteira.</p><div class="screen-callout mint"><strong>Acumulação = entrada − saída + geração − consumo</strong><p>Declare as condições antes de eliminar termos.</p></div><h5>Conferir a interpretação</h5><p>Regime permanente não significa necessariamente equilíbrio.</p></div>')],
   ['Revisão','Uma pergunta para recuperar a ideia.','O cartão ajuda a conferir a compreensão antes de voltar ao desenvolvimento completo.',screen('Flashcards','<div class="screen-content review-screen"><span class="pill lilac">Reatores</span><h4>Onde avaliar a velocidade no CSTR ideal permanente?</h4><div class="screen-callout blue"><strong>Nas condições da saída.</strong><p>Concentração e temperatura são uniformes no modelo de mistura perfeita.</p></div><div class="rating-sample"><span>Retomar</span><span>Em estudo</span><span>Compreendido</span></div></div>')],
   ['Agenda','A avaliação conversa com o estudo anterior.','O plano distribui resolução, análise e fechamento antes da data da entrega.',screen('Planejamento',`<div class="screen-content"><small>SEMANA ACADÊMICA</small><h4>Revisar, analisar e entregar</h4>${rows([['Segunda','Retomar balanços e hipóteses'],['Quarta','Revisar gráficos do relatório'],['Quinta','Entregar arquivo e resolver dúvidas'],['Sexta','Prova e orientação de TCC']])}</div>`)],
   ['Laboratório','O relatório se conecta ao experimento.','Dados, gráficos e discussão são registros com funções diferentes na análise.',screen('Relatório',`<div class="screen-content"><small>EXPERIMENTO / ESCOAMENTO</small><h4>Da coleta à discussão</h4>${rows([['DADOS','Vazão, pressão e condições de medição'],['GRÁFICOS','Eixos e unidades identificados'],['DISCUSSÃO','Comparação com o modelo adotado'],['ARQUIVO','Versão revisada para entrega']])}</div>`)],
   ['Pesquisa','Uma investigação com próximos passos.','Fontes, análise e orientação ajudam a transformar a pergunta em um projeto acompanhado.',screen('TCC e pesquisa','<div class="screen-content"><small>PROJETO EM DESENVOLVIMENTO</small><h4>Análise de um processo de separação</h4><div class="screen-duo"><div class="lilac"><h5>Modelo e fontes</h5><p>Pergunta e critérios</p><p>Parâmetros</p><p>Balanços e hipóteses</p></div><div class="mint"><h5>Organização</h5><p>Reunião de orientação</p><p>Versão do texto</p><p>Próxima análise</p></div></div></div>')]
  ];
  $('#screens').innerHTML=entries.map(([label,title,text,html])=>`<article class="screen-example">${html}<span class="script">${label}</span><h3>${title}</h3><p>${text}</p></article>`).join('');
 }

  Promise.all([fetch('/assets/content.json').then(r=>{if(!r.ok)throw Error('content');return r.json();}),fetch('/assets/presentation.json').then(r=>{if(!r.ok)throw Error('presentation');return r.json();}),fetch('/assets/config.json').then(r=>r.ok?r.json():{}).catch(()=>({}))]).then(([data,presentation,config])=>{
    renderPresentation(presentation);
    const topics=data.topics;
    const areas=[...new Set(topics.map(t=>t.area))];
    $('#subjects').innerHTML=areas.map((a,i)=>`<span class="${tone(i)}">${esc(a)}</span>`).join('');
    $('#summaries').innerHTML=topics.map((t,i)=>`<article class="study-card ${tone(i)}"><details class="study-disclosure" ${i<10?'open':''}><summary><small>${esc(t.area)}</small><h3>${esc(t.title)}</h3><span class="disclosure-label">Ler o resumo completo</span></summary><div class="study-body"><p class="lead">${esc(t.lead)}</p>${t.paragraphs.map((p,j)=>`<div class="reading-block"><h4>${['Compreender o conceito','Relacionar o modelo','Conferir a interpretação'][j]}</h4><p>${esc(p)}</p></div>`).join('')}<div class="formula-card"><span>Relação para organizar o estudo</span><p>${esc(t.formula)}</p></div><div class="unit-note"><strong>Unidades e coerência</strong><p>${esc(t.units)}</p></div><div class="example-note"><strong>Exemplo aplicado</strong><p>${esc(t.example)}</p></div><div class="attention-note"><strong>Um ponto para não confundir</strong><p>${esc(t.pitfall)}</p></div></div></details></article>`).join('');
    let cardIndex=0;
    $('#flash-grid').innerHTML=topics.flatMap((t,i)=>t.cards.map(([q,a])=>{const initial=cardIndex++<20;return `<article class="flash-card ${tone(i)}"><span>${esc(t.area)}</span><details class="flash-disclosure" ${initial?'open':''}><summary><h3>${esc(q)}</h3><span class="answer-label">Ver resposta</span></summary><div class="answer"><p>${esc(a)}</p></div></details></article>`;})).join('');
    const mobile=matchMedia('(max-width:700px)');
    const density=()=>{document.querySelectorAll('.study-disclosure').forEach((d,i)=>d.open=!mobile.matches||i<10);document.querySelectorAll('.flash-disclosure').forEach((d,i)=>d.open=!mobile.matches||i<20);$('#all-answers').setAttribute('aria-pressed',String(!mobile.matches));$('#all-answers').textContent=mobile.matches?'Abrir todas as respostas':'Recolher as respostas';};
    density();mobile.addEventListener('change',density);
    $('#all-answers').addEventListener('click',()=>{const open=$('#all-answers').getAttribute('aria-pressed')!=='true';document.querySelectorAll('.flash-disclosure').forEach(d=>d.open=open);$('#all-answers').setAttribute('aria-pressed',String(open));$('#all-answers').textContent=open?'Recolher as respostas':'Abrir todas as respostas';});
    renderScreens(topics);
    if(config.checkoutUrl && /^https:\/\//.test(config.checkoutUrl)){
      document.querySelectorAll('.checkout-pending').forEach(el=>el.hidden=true);
      document.querySelectorAll('.purchase-link').forEach(a=>{a.href=config.checkoutUrl;a.target='_blank';a.rel='noopener noreferrer';a.textContent=a.hasAttribute('data-compact-label')?'Comprar agora':config.priceBRL?'Comprar agora · '+new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(config.priceBRL):'Comprar agora';});
      if(typeof config.priceBRL==='number'&&config.priceBRL>0){$('#price').hidden=false;$('#price').textContent=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(config.priceBRL);}
      if(typeof config.platformFeeBRL==='number'&&typeof config.priceBRL==='number'){const money=n=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n);$('.platform-fee').innerHTML='Taxa da plataforma: <strong>'+money(config.platformFeeBRL)+'</strong><br>Total atual no checkout: <strong>'+money(config.priceBRL+config.platformFeeBRL)+'</strong>';}

    }
  }).catch(()=>{$('#summaries').innerHTML='<p role="alert">Não foi possível carregar os conteúdos. Atualize a página para tentar novamente.</p>';});
})();
