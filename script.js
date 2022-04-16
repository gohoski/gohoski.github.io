document.addEventListener('DOMContentLoaded', async () => {
  let progress = document.querySelector('progress');
  let columns = document.querySelector('.columns');
  const resp = await fetch('/projects.json');
  const projects = await resp.json();
  console.log(projects);
  progress.style.display = 'none';
  // let projectsDone = 0;
  projects.forEach(async (project, i) => {
    let column = document.createElement('div');
    column.className = 'column is-one-quarter';
    let box = document.createElement('div');
    box.className = 'box is-narrow';

    let title = document.createElement('h2');
    title.className = 'title';
    title.innerText = project.name;
    box.append(title);

    let fimg = document.createElement('figure');
    fimg.className = 'image is-5by4';
    let img = document.createElement('img');
    img.src = project.img;
    fimg.append(img);
    box.append(fimg);

    let desc = document.createElement('p');
    desc.innerText = project.description;
    desc.className = 'p-2';
    box.append(desc);

    let button = document.createElement('a');
    button.className = 'button is-link';
    button.innerText = 'View';
    button.href = project.url;
    box.append(button);

    column.append(box);
    if (i % 4 === 0) {
      columns = document.createElement('div');
      columns.className = 'columns';
      columns.append(column);
      document.body.querySelector('section').append(columns);
    } else
      columns.append(column);
    //projectsDone += 1
  })
})
