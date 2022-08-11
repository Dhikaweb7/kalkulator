const angka = document.querySelectorAll('.tombol');

for( a of angka ) {
  a.onclick = function() {
    
    const layar = document.querySelector('.layar');
    const nilaiDiLayar = layar.innerHTML;
    const nilaiTombol = this.innerHTML;
    
    if( nilaiTombol == 'C' ) {
      layar.innerHTML = '';
    } else if( nilaiTombol == '=' ) {
      layar.innerHTML = eval( nilaiDiLayar );
    } else {
      layar.innerHTML += nilaiTombol;
    }
          
  }
}
