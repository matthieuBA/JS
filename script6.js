var HBB_GENE_DNA = 'UUACGCAGUAGA';

function ARN(str) {
  

var arr = str.split( /(?<=^(?:.{3})+)(?!$)/ ) 

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
  }
});
console.log(out_amino);
alert(out_amino);
}



ARN('UUACGCAGUAGA') 

ARN('CCGUCGUUGCGCUACAGC') 

ARN('CCUCGCCGGUACUUCUCG') 


