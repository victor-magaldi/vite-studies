import React, { useState, DragEvent } from 'react';

interface DragAndDropProps {}

export function DragAndDrop(){
  const [dragging, setDragging] = useState(false);
  const [tasks, setTasks] = useState<any>([]);

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', e.target?.id);
    setDragging(true);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(data) as HTMLElement;
    const el = e.target as HTMLElement;
    el.appendChild(draggedItem);
    setDragging(false);
  };

  return (
    <div>
      <h2>Kanban Board</h2>
      <div style={{ display: 'flex' }}>
        <div
          id="todo"
          onDragOver={handleDragOver}
          onDrop={(e: DragEvent<HTMLDivElement>) => handleDrop(e)}
          style={{
            width: '250px',
            minHeight: '300px',
            border: '1px solid #ccc',
            marginRight: '20px',
            padding: '10px',
          }}
        >
          <h3>A fazer</h3>
        </div>
        <div
          id="inprogress"
          onDragOver={handleDragOver}
          onDrop={(e: DragEvent<HTMLDivElement>) => handleDrop(e)}
          style={{
            width: '250px',
            minHeight: '300px',
            border: '1px solid #ccc',
            marginRight: '20px',
            padding: '10px',
          }}
        >
          <h3>Em progresso</h3>
        </div>
        <div
          id="done"
          onDragOver={handleDragOver}
          onDrop={(e: DragEvent<HTMLDivElement>) => handleDrop(e)}
          style={{
            width: '250px',
            minHeight: '300px',
            border: '1px solid #ccc',
            padding: '10px',
          }}
        >
          <h3>Concluído</h3>
        </div>
      </div>
      <div
        id="draggable-item"
        draggable
        onDragStart={(e: DragEvent<HTMLDivElement>) => handleDragStart(e)}
        style={{
          width: '200px',
          height: '50px',
          backgroundColor: dragging ? 'lightblue' : 'lightgreen',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Tarefa 1
      </div>
    </div>
  );
};