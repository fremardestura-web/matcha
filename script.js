const recipes = [
  { id:1, name:'Matcha Latte', tag:'classic', color:'green', description:'The clean KAIEN starting point: earthy ceremonial matcha, creamy milk and just enough sweetness.', ingredients:['1–2 tsp ceremonial matcha','60 ml warm water, 70–80°C','180 ml milk of choice','1–2 tsp vanilla or simple syrup','Ice, optional'], method:['Sift matcha into a bowl and add warm water.','Whisk briskly in a W motion until smooth and foamy.','Add sweetener to a glass, then ice and milk.','Pour the matcha over the top and gently stir.'] },
  { id:2, name:'Strawberry Matcha Latte', tag:'fruity', color:'berry', description:'Sweet strawberry at the bottom, silky milk in the middle, bright matcha on top.', ingredients:['70 g fresh strawberries','1–2 tsp sugar or honey','1–2 tsp matcha','60 ml warm water','170 ml milk','Ice'], method:['Mash strawberries with sugar until juicy and spoon into the glass.','Add ice and pour in chilled milk.','Whisk matcha with warm water until smooth.','Slowly pour matcha over the milk for a layered finish.'] },
  { id:3, name:'Vanilla Coco Matcha Cold Foam', tag:'cloud', color:'coco', description:'A tropical, creamy matcha with coconut milk and a soft vanilla cold-foam crown.', ingredients:['1–2 tsp matcha','60 ml warm water','150 ml coconut milk','1 tsp vanilla syrup','60 ml cold milk or cream for foam','1 tsp vanilla syrup for foam','Ice'], method:['Whisk matcha with warm water.','Fill a glass with ice, coconut milk and vanilla.','Froth cold milk or cream with vanilla until airy.','Top with the foam and finish with a matcha dusting.'] },
  { id:4, name:'Cherry Cloud Matcha Latte', tag:'fruity', color:'cherry', description:'Tart cherry compote meets creamy matcha under a pillowy cloud of milk foam.', ingredients:['70 g pitted cherries, fresh or frozen','1–2 tsp sugar','1–2 tsp matcha','60 ml warm water','170 ml milk','60 ml cold foam','Ice'], method:['Cook cherries with sugar for 3–5 minutes, then cool.','Spoon cherry compote into the glass and add ice.','Add milk, leaving room for the matcha.','Pour whisked matcha over the milk and crown with foam.'] },
  { id:5, name:'Mermaid Matcha Latte', tag:'classic', color:'blue', description:'An ocean-toned matcha built with butterfly pea for a dreamy blue-to-green swirl.', ingredients:['1–2 tsp matcha','60 ml warm water','½–1 tsp butterfly pea powder','60 ml warm milk for blue layer','120 ml milk','Honey, optional','Ice'], method:['Whisk matcha with warm water.','Blend butterfly pea powder with a little milk until blue and smooth.','Fill the glass with ice and the remaining milk.','Add the blue layer, then pour matcha over it for the signature swirl.'] },
  { id:6, name:'Coco Earl Grey Matcha Latte', tag:'classic', color:'earl', description:'Bergamot, coconut and matcha in one floral, creamy afternoon cup.', ingredients:['1 Earl Grey tea bag','80 ml hot water','1–2 tsp matcha','50 ml warm water','150 ml coconut milk','1 tsp vanilla syrup','Ice'], method:['Steep Earl Grey in hot water for 3–4 minutes and cool slightly.','Whisk matcha separately with warm water.','Fill a glass with ice, coconut milk and vanilla.','Add Earl Grey, then layer the matcha on top.'] },
  { id:7, name:'Espresso Matcha Latte', tag:'coffee', color:'coffee', description:'A bold dirty matcha pairing: grassy matcha, creamy milk and a dark espresso finish.', ingredients:['1–2 tsp matcha','60 ml warm water','170 ml milk','1 shot espresso','1–2 tsp syrup','Ice'], method:['Whisk matcha with warm water until foamy.','Add syrup, ice and milk to a tall glass.','Pour matcha over the milk.','Finish with a fresh espresso shot poured slowly over the top.'] },
  { id:8, name:"Matcha S'more Latte", tag:'cloud', color:'green', description:'A dessert-style matcha with vanilla milk, toasted marshmallow foam and a little cocoa crunch.', ingredients:['1–2 tsp matcha','60 ml warm water','170 ml milk','1 tsp vanilla syrup','Marshmallow cream or cold foam','Crushed graham crackers','Cocoa powder'], method:['Whisk matcha with warm water.','Build a vanilla milk and ice base.','Pour matcha over the milk.','Top with marshmallow foam, graham crumbs and a light cocoa dusting.'] },
  { id:9, name:'Tira-Miss-U Matcha Latte', tag:'cloud', color:'earl', description:'A tiramisu-inspired matcha with vanilla cream, cocoa and a soft mascarpone-style finish.', ingredients:['1–2 tsp matcha','60 ml warm water','160 ml milk','1 tsp vanilla syrup','60 ml mascarpone-style cold foam','Cocoa powder','Optional crushed biscuit'], method:['Whisk matcha until silky and bright.','Combine milk and vanilla over ice.','Pour matcha over the milk.','Top with mascarpone-style foam and finish with cocoa.'] },
  { id:10, name:'Matcha Cloud Latte', tag:'cloud', color:'green', description:'The softest version of a matcha latte: creamy milk, bright matcha and an oversized cloud of foam.', ingredients:['1–2 tsp matcha','60 ml warm water','170 ml milk','1 tsp honey or syrup','70 ml cold foam','Matcha powder, to finish','Ice'], method:['Whisk matcha with warm water until frothy.','Add milk, sweetener and ice to the glass.','Pour matcha over the milk.','Spoon a generous cold foam cloud over the drink and dust with matcha.'] }
];

const grid = document.getElementById('recipeGrid');
const modal = document.getElementById('recipeModal');
const modalTitle = document.getElementById('modalTitle');
const modalTag = document.getElementById('modalTag');
const modalDescription = document.getElementById('modalDescription');
const modalIngredients = document.getElementById('modalIngredients');
const modalMethod = document.getElementById('modalMethod');
const modalArt = document.getElementById('modalArt');

function drinkMarkup(recipe){
  const layers = {
    green: '<div class="layer matcha"></div><div class="layer milk"></div><div class="layer cloud"></div>',
    berry: '<div class="layer berry"></div><div class="layer milk"></div><div class="layer matcha"></div>',
    coco: '<div class="layer coco"></div><div class="layer milk"></div><div class="layer cloud"></div>',
    cherry: '<div class="layer cherry"></div><div class="layer milk"></div><div class="layer matcha"></div><div class="layer cloud"></div>',
    blue: '<div class="layer milk"></div><div class="layer matcha"></div><div class="layer cloud"></div>',
    earl: '<div class="layer earl"></div><div class="layer milk"></div><div class="layer matcha"></div><div class="layer cloud"></div>',
    coffee: '<div class="layer coffee"></div><div class="layer milk"></div><div class="layer matcha"></div>'
  };
  return `<div class="drink">${layers[recipe.color] || layers.green}</div>`;
}

function render(filter='all'){
  grid.innerHTML = recipes.filter(r => filter==='all' || r.tag===filter).map(r => `
    <article class="recipe-card" data-id="${r.id}" tabindex="0" aria-label="Open ${r.name} recipe">
      <div class="card-art" style="background:${cardBackground(r.color)}">
        <div class="card-top"><span class="card-number">0${r.id}</span><span class="card-tag">${r.tag}</span></div>
        ${drinkMarkup(r)}
      </div>
      <div class="card-info">
        <h3>${r.name}</h3>
        <p>${r.description}</p>
        <span class="card-link">view recipe ↗</span>
      </div>
    </article>`).join('');
  grid.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', () => openRecipe(Number(card.dataset.id)));
    card.addEventListener('keydown', e => { if(e.key==='Enter' || e.key===' ') openRecipe(Number(card.dataset.id)); });
  });
}

function cardBackground(color){
  const map = {
    green:'linear-gradient(145deg,#d8ebdf,#a9c9a5)', berry:'linear-gradient(145deg,#f8d9e1,#c7e2e9)', coco:'linear-gradient(145deg,#e6d6c3,#cce2dc)', cherry:'linear-gradient(145deg,#f4cbd7,#d9e9df)', blue:'linear-gradient(145deg,#c9e9f3,#d8e8d4)', earl:'linear-gradient(145deg,#ded2cc,#d1e3d9)', coffee:'linear-gradient(145deg,#e3d2ca,#c8ded4)'
  }; return map[color] || map.green;
}

function openRecipe(id){
  const r = recipes.find(x=>x.id===id); if(!r) return;
  modalTitle.textContent = r.name;
  modalTag.textContent = `KAIEN / ${r.tag}`;
  modalDescription.textContent = r.description;
  modalIngredients.innerHTML = r.ingredients.map(i=>`<li>${i}</li>`).join('');
  modalMethod.innerHTML = r.method.map(i=>`<li>${i}</li>`).join('');
  modalArt.style.background = cardBackground(r.color);
  modalArt.innerHTML = drinkMarkup(r);
  modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
}
function closeModal(){ modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); }

document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); render(btn.dataset.filter);
}));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

document.querySelector('.menu-btn').addEventListener('click',()=>{
  const nav=document.querySelector('nav'); nav.style.display=nav.style.display==='flex'?'none':'flex'; nav.style.position='absolute'; nav.style.top='70px'; nav.style.right='6vw'; nav.style.flexDirection='column'; nav.style.padding='20px'; nav.style.background='rgba(255,253,248,.96)'; nav.style.border='1px solid var(--line)'; nav.style.borderRadius='18px';
});
render();
