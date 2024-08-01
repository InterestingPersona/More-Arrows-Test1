const FAPI = window.fapi;
const ModalHandler = FAPI.imodules.ModalHandler;
const ChunkUpdates = FAPI.routes.ChunkUpdates;

const mod = FAPI.registerMod("zero.astro");

// region diagonalSplitter1

const diagonalSplit1 = mod.registerArrow(0)
diagonalSplit1.name = ["Diagonal splitter", "Диагональный разветвитель", "Not supported", "Not supported"];
diagonalSplit1.activation = ["On any incoming signal.", "Любым входящим сигналом.", "Not supported", "Not supported"];
diagonalSplit1.action = ["Sends a signal to the left upper and right upper corner.", "Передаёт сигнал в левый верхний правый верхний угол.", "Not supported", "Not supported"];
diagonalSplit1.icon_url = "https://raw.githubusercontent.com/w1zlm/Anything/main/arrow1.png";
diagonalSplit1.clickable = false;

diagonalSplit1.update = (arrow) => {
    arrow.signal = 0;
    if (arrow.signalsCount > 0) arrow.signal = 2;
};
diagonalSplit1.transmit = (arrow) => {
    if (arrow.signal === 2) {
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, 1));
        ChunkUpdates.updateCount(arrow, ChunkUpdates.getArrowAt(arrow.chunk, arrow.x, arrow.y, arrow.rotation, arrow.flipped, -1, -1));
    }
}
