
var HBB_GENE_DNA = 'UUACGCAGUAGA';
var div = document.querySelector('.result');
div.innerHTML = "<h4>ARN : </h4><br/>";
let out_msg = '';

function ARN(str) {
let arr = str.match(/.{1,3}/g)
let out_amino=''
arr.forEach(Content => {
  console.log(Content)
  switch (Content) {
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
    case 'AGU':
    case 'AGC':
      console.log('Sérine');
      out_amino+='Sérine '
      break;
    case 'CCU':
    case 'CCC':
    case 'CCA':
    case 'CCG':
      console.log('Proline');
      out_amino+='Proline '
      break;
    case 'UUA':
    case 'UUG':
      console.log('Leucine');
      out_amino+='Leucine '
      break;
    case 'UUU':
    case 'UUC':
      console.log('Phénylalanine');
      out_amino+='Phénylalanine '
      break;
    case 'CGU':
    case 'CGC':
    case 'CGA':
    case 'CGG':
    case 'AGA':
    case 'AGG':
      console.log('Arginine');
      out_amino+='Arginine '

      break;

    case 'UAU':
    case 'UAC':
      console.log('Tyrosine');
      out_amino+='Tyrosine '
      
      break;
    default:
      console.log(`Sorry, we are out of ${content}.`);
      div.innerHTML += `Sorry, we are out of ${content}.`+"<br/>";
      alert(`Sorry, we are out of ${content}.`);

  }
});
console.log(out_amino);
div.innerHTML += "<h4>Amino Acids Result : "+str+" </h4>";+"<br/><br/>";
div.innerHTML += out_amino+"<br/>";
alert(out_amino);
}

ARN('UUACGCAGUAGA');

ARN('CCGUCGUUGCGCUACAGC');

ARN('CCUCGCCGGUACUUCUCG');


