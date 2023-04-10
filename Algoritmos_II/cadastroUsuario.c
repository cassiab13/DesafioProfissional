#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>

int op;
void cadastrar_usuario();


	typedef struct{
		char nome[50];
		char sobrenome[50];
		int matricula;
		int setor;
		char email[50];
	}cad_usuario;


int main(){
	setlocale(LC_ALL,"Portuguese");
	
	cadastrar_usuario();
	
}
void cadastrar_usuario(){
	static int linha;
	cad_usuario usuario[100];
	
	do{
	system("cls");
	printf("\n //// CADASTRO DE USUÁRIO ////\n");
	printf("\n Nome: ");
	fgets(usuario[linha].nome,50,stdin);
	fflush(stdin);
	printf("\n Sobrenome: ");
	fgets(usuario[linha].sobrenome,50,stdin);
	fflush(stdin);
	printf("\n Digite o número da matrícula: ");
	scanf("%d",&usuario[linha].matricula);
	fflush(stdin);
	
	do{
	printf("\n Selecione o setor:\n [1] Secretaria de Aceleração Econômica e Turismo \n [2] Secretaria de Esportes e Lazer \n [3] Secretaria da Fazenda \n [4] SEcretaria da Mobilidade Urbana \n [5] Secretaria de Frotas\n");
	scanf("%d",&usuario[linha].setor);
	fflush(stdin);
		if (usuario[linha].setor>6){
			printf("\n Setor inválido! \n");
			getchar();
		}	
	}while(usuario[linha].setor>6);
	
	printf("\n Digite o email: ");
	fgets(usuario[linha].email,50,stdin);
	fflush(stdin);
	printf("\n Cadastro realizado com sucesso!\n\n Deseja cadastrar outro usuário?\n [1] Sim\n [2] Não\n");
	scanf("%d",&op);
	fflush(stdin);
	linha++;
	
	}while(op==1);
}