<?php

header('Content-type: aplication/json; charset=utf-8');

$aulas=[
    [
        'id'=>1,
        'nombre'=>"Aula de Informática",
        'capacidad'=>30
    ],
    [
        'id'=>2,
        'nombre'=>"Biblioteca",
        'capacidad'=>35
    ],
    [
        'id'=>3,
        'nombre'=>"Taller de Tecnología",
        'capacidad'=>20
    ]
];

echo json_encode($aulas, JSON_UNESCAPED_UNICODE);

?>